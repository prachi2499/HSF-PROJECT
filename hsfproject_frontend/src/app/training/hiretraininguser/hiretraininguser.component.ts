import { Component, OnInit } from '@angular/core';
import { t_hire_class } from '../../classes/training_hire_class';
import { t_user_subcat_class } from '../../classes/t_usersubcat_class';
import { TrainingHireService } from '../../services/training-hire.service';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-hiretraininguser',
  templateUrl: './hiretraininguser.component.html',
  styleUrls: ['./hiretraininguser.component.css']
})
export class HiretraininguserComponent implements OnInit {

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

  sub_cat_id:number;

  tusersubcatarr:t_user_subcat_class[]=[];

  flag:boolean=false;
  designers:string[];
  constructor(private _route:Router,private _actroute:ActivatedRoute,private training_service:TrainingHireService) { }

  ngOnInit() {
    this._actroute.params.subscribe(
      (y:Params)=>{

        this.sub_cat_id=y['id'];
        console.log('subcat id'+this.sub_cat_id);
      }
      );


  }

  chooseDesigner(){

    this.fkuser_id=localStorage.getItem("email_id");
    this.training_service.addTraining(new t_user_subcat_class(this.t_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.fkuser_id,"",this.sub_cat_id)).subscribe(
     (data:any)=>{
         this.tusersubcatarr.push(new t_user_subcat_class(this.t_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.fkuser_id,"",this.sub_cat_id));

         localStorage.setItem("id1",data.insertId);



        this._route.navigate(['/selectdesi_training']);
        localStorage.setItem("amt",this.t_budget+" ");

        localStorage.setItem("subcat",this.sub_cat_id+"");


     }

   );
 }


}
