import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { t_hire_class } from '../../../classes/training_hire_class';
import { cat_subcat_c } from '../../../classes/cat_subcat_class';
import { t_user_subcat_class } from '../../../classes/t_usersubcat_class';
import { Router } from '@angular/router';
import { TrainingHireService } from '../../../services/training-hire.service';
import { SubcatserService } from '../../../services/subcatser.service';

@Component({
  selector: 'app-hiretrainingpage',
  templateUrl: './hiretrainingpage.component.html',
  styleUrls: ['./hiretrainingpage.component.css']
})
export class HiretrainingpageComponent implements OnInit {
  trainingDataSource= new MatTableDataSource();
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
  fksubcat_name:string;
  subcat_id:number;
  subcat_name:string;
  name:string;
  i:number;
  sub_catnamearr:cat_subcat_c[];
  tusersubcatarr:t_user_subcat_class[]=[];
  selected_subcat:cat_subcat_c;
  flag:boolean=false;
  designers:string[];
  constructor(private _route:Router,private train_ser:TrainingHireService,private sub_ser:SubcatserService) { }

  ngOnInit() {
    this.fkuser_id=localStorage.getItem("email_id");
    this.getAllSubCategory();
  }

  getAllSubCategory(){
    this.sub_ser.getAllSubcategory().subscribe(
      (data:any)=>{
        this.sub_catnamearr=data;

      }
    );
  }

  chooseDesigner(){
    //this.fksubcat_id=this.selected_subcat.subcat_id;
    this.train_ser.addTraining(new t_user_subcat_class(this.t_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.fkuser_id,"",this.fksubcat_id)).subscribe(
     (data:any)=>{
         this.tusersubcatarr.push(new t_user_subcat_class(this.t_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.fkuser_id,"",this.fksubcat_id));

         localStorage.setItem("id1",data.insertId);


      this.trainingDataSource.data=this.tusersubcatarr;
        this._route.navigate(['/choosedesigner_train']);
        localStorage.setItem("amt",this.t_budget+" ");
        localStorage.setItem("subcat",this.fksubcat_id+" ");
        //localStorage.setItem("subcat",this.fksubcat_name);


     }

   );
 }
}
