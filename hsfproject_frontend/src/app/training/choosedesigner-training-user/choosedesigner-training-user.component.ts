import { Component, OnInit } from '@angular/core';
import { desig_class } from '../../classes/designer_class';
import { TrainingHireService } from '../../services/training-hire.service';
import { Router } from '@angular/router';
import { t_user_subcat_class } from '../../classes/t_usersubcat_class';

@Component({
  selector: 'app-choosedesigner-training-user',
  templateUrl: './choosedesigner-training-user.component.html',
  styleUrls: ['./choosedesigner-training-user.component.css']
})
export class ChoosedesignerTrainingUserComponent implements OnInit {

  designerarr:desig_class[]=[];
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
  email_id:string;
  x:number;
  date1:string;
  date2:Date;

  constructor(private training_service:TrainingHireService,private _route:Router) { }

  ngOnInit() {

  this.fkuser_id=localStorage.getItem("email_id");
    this.t_id=parseInt(localStorage.getItem("id1"));
    this.training_service.getTrainingByid(this.t_id).subscribe(
      (data:t_user_subcat_class[])=>{
        this.t_id=data[0].t_id;
        this.t_participants=data[0].t_participants;
        this.t_type=data[0].t_type;
        this.t_budget=data[0].t_budget;
        this.t_date=data[0].t_date;
        this.t_title=data[0].t_title;
        this.t_company=data[0].t_company;
        this.t_help=data[0].t_help;
        this.fkuser_id=data[0].fkuser_id;

        this.fksubcat_id=data[0].fksubcat_id;
      }

    );




    console.log(this.t_id);
    this.training_service.chooseDesigners().subscribe(
      (data:desig_class[])=>{
        this.designerarr=data;
      }
    );
  }


  onaddDesigner(item){

    this.fkdesigner_id=item.email_id;
    this.training_service.updateDesigner_training(new t_user_subcat_class(this.t_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.fkuser_id,item.email_id,this.fksubcat_id)).subscribe(
      (data:any)=>{
        console.log(data);

        this._route.navigate(['/user_order']);
        console.log('desi'+this.fkdesigner_id);
        localStorage.setItem("dname",this.fkdesigner_id);

      }
    );


  }
  ondetails(item)
  {
    this._route.navigate(['/portfolio',item.email_id]);
  }

  onreview(item)
  {
    this._route.navigate(['/reviewdesig',item.email_id]);
    console.log('review');
  }
}
