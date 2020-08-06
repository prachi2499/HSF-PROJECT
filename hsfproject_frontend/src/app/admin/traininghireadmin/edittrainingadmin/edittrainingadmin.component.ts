import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingHireService } from '../../../services/training-hire.service';
import { t_user_subcat_class } from '../../../classes/t_usersubcat_class';
import { t_hire_class } from '../../../classes/training_hire_class';

@Component({
  selector: 'app-edittrainingadmin',
  templateUrl: './edittrainingadmin.component.html',
  styleUrls: ['./edittrainingadmin.component.css']
})
export class EdittrainingadminComponent implements OnInit {
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
  subcat_name:string;
  x:number;
  constructor(private route:Router,private actroute:ActivatedRoute,private train_Ser:TrainingHireService) { }

  ngOnInit() {

    this.x=this.actroute.snapshot.params['id'];
    this.train_Ser.getTrainingByid(this.x).subscribe(
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
        this.fkdesigner_id=data[0].fkdesigner_id;
        this.fksubcat_id=data[0].fksubcat_id;

      }
    );
  }
  onsave(){
    this.train_Ser.updatetraining(new t_hire_class(this.t_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.fkuser_id,this.fkdesigner_id,this.fksubcat_id)).subscribe(
      (data:any)=>{

        this.route.navigate(['/train_hire_admin']);
      }
    );

  }

}
