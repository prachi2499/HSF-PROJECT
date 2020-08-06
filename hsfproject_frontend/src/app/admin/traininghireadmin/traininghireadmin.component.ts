import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { t_hire_class } from '../../classes/training_hire_class';
import { t_user_subcat_class } from '../../classes/t_usersubcat_class';
import { subcat_c } from '../../classes/subcat_class';
import { SubcatserService } from '../../services/subcatser.service';
import { TrainingHireService } from '../../services/training-hire.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-traininghireadmin',
  templateUrl: './traininghireadmin.component.html',
  styleUrls: ['./traininghireadmin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TraininghireadminComponent implements OnInit {
  trainingDataSource= new MatTableDataSource();
  displayedColumns:string[] = ['check','fksubcat_id','t_date','t_budget','fkuser_id','fkdesigner_id','Action'];
  expandedElement=this.trainingDataSource;
  trainingarr:t_hire_class[]=[];
  t_id:number;
  t_participants:number;
  t_type:string;
  t_budget:number;
  t_date:Date;
  t_title:string;
  t_company:string;
  t_help:string;
  fkuser_id:string;
  fkdesigner_id:string;
  fksubcat_id:number;
  name:string;
  deltraininghirearr:t_user_subcat_class[]=[];
  i:number;
  tusersubcatarr:t_user_subcat_class[]=[];
  flag:boolean=false;
  arrsubcat:subcat_c[]=[];
  designers:string[];
sdate:string;

  constructor(private route:Router,private subcat_ser:SubcatserService,private train_ser:TrainingHireService) { }

  ngOnInit() {

    this.train_ser.getTrainingbyUser().subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.tusersubcatarr=data;
        this.trainingDataSource.data=this.tusersubcatarr;


        // this.train_ser.getAllDesigner_training().subscribe(
        //   (data:any)=>{
        //     this.designers=data;

        //     for(let i=0;i<this.designers.length;i++){
        //       this.tusersubcatarr[i].fkdesigner_id=this.designers[i];
        //     }

        //     this.trainingDataSource.data=this.tusersubcatarr;
        // }
        //  );





      }

    );
  }
  applyFilter(filterValue: string) {
    this.trainingDataSource.filter = filterValue.trim().toLowerCase();
  }
  onAddplus(){

    this.route.navigate(['/add_training_admin']);

  }


  onDeleteTraining(item:t_user_subcat_class)
  {
    if(window.confirm('Are you sure you want to delete this item?'))
    {
    this.train_ser.deleteTraining(item).subscribe(
      (data:any)=>{
        this.tusersubcatarr.splice(this.tusersubcatarr.indexOf(item),1);
        this.trainingDataSource.data=this.tusersubcatarr;

      }
    );
  }
  }
  onUpdateTraining(item:t_user_subcat_class)
  {
    this.route.navigate(['/edittrain_admin',item.t_id]);
  }
  trainingcheckchange(item:t_user_subcat_class){
    if(this.deltraininghirearr.find(x=>x==item)){
      this.deltraininghirearr.splice(this.deltraininghirearr.indexOf(item),1);
    }
    else{
      this.deltraininghirearr.push(item);
    }


  }
  onDeleteMulTraining(){
    if(window.confirm('Are you sure you want to delete this item?'))
    {
    this.train_ser.deleteMultiple(this.deltraininghirearr).subscribe(
      (x:any)=>{
      for(this.i=0;this.i<this.deltraininghirearr.length;this.i++){
        if(this.tusersubcatarr.find(x=>x==this.deltraininghirearr[this.i])){
          this.tusersubcatarr.splice(this.tusersubcatarr.indexOf(this.deltraininghirearr[this.i]),1);
        }
      }
      this.trainingDataSource.data=this.tusersubcatarr;

    });
}}


}
