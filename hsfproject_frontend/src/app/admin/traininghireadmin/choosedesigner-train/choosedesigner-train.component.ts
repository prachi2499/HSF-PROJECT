import { Component, OnInit } from '@angular/core';
import { desig_class } from '../../../classes/designer_class';
import { Router } from '@angular/router';
import { TrainingHireService } from '../../../services/training-hire.service';
import { t_user_subcat_class } from '../../../classes/t_usersubcat_class';

@Component({
  selector: 'app-choosedesigner-train',
  templateUrl: './choosedesigner-train.component.html',
  styleUrls: ['./choosedesigner-train.component.css']
})
export class ChoosedesignerTrainComponent implements OnInit {
  designerarr:desig_class[]=[];
  t_id:number;
  t_participants:number;
  t_type:string;
  t_budget:number;
  t_date:Date;
  t_title:string;
  t_company:string;
  t_help:string;
  fkuser_id:string="";
  fkdesigner_id:string;
  fksubcat_id:number;
  email_id:string;
  x:number;
  constructor(private route:Router,private train_ser:TrainingHireService) { }

  ngOnInit() {
    this.fkuser_id=localStorage.getItem("email_id");

    this.t_id=parseInt(localStorage.getItem("id1"));
    this.train_ser.getTrainingByid(this.t_id).subscribe(
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
        // this.fkdesigner_id=data[0].fkdesigner_id;
        this.fksubcat_id=data[0].fksubcat_id;
      }
    );

    console.log(this.t_id);
    this.train_ser.chooseDesigners().subscribe(
      (data:desig_class[])=>{
        this.designerarr=data;
      }
    );
  }

  onaddDesigner(item){

    this.fkdesigner_id=item.email_id;
    this.train_ser.updateDesigner_training(new t_user_subcat_class(this.t_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.fkuser_id,item.email_id,this.fksubcat_id)).subscribe(
      (data:any)=>{
        //console.log(item.email_id);
        this.route.navigate(['/order']);
        console.log('desi'+this.fkdesigner_id);
        localStorage.setItem("dname",this.fkdesigner_id);

      }
    );


  }
  ondetail(item)
  {
this.route.navigate(['/details',item.email_id]);
  }

  onreview(item)
  {
    this.route.navigate(['/review_admin',item.email_id]);
    console.log('review');
  }
}
