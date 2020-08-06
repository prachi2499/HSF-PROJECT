import { Component, OnInit } from '@angular/core';
import { TrainContestService } from '../../services/train-contest.service';
import { Router } from '@angular/router';
import { tcontest_user_subcat_c } from '../../classes/t_user_contest_class';

@Component({
  selector: 'app-train-add-duration-contest',
  templateUrl: './train-add-duration-contest.component.html',
  styleUrls: ['./train-add-duration-contest.component.css']
})
export class TrainAddDurationContestComponent implements OnInit {
  durationarr:string[]=[
    "2 minutes",
    "10 minutes",
    "30 minutes",
    "1 hour",
    "3 hours",
    "24 hours"
  ];
  a_contest_id:number;
  cnt:number=0;
  starttime:string;
  t_contest_id:number;
  t_participants:number;
  t_type:string;
  t_budget:number;
  t_date:Date;
  t_title:string;
  t_company:string;
  t_help:string;
  s_time:string;
  e_time:string;
  fkuser_id:string;
  fkdesigner_id:string;
  fksubcat_id:number;
  subcat_name:string;
  constructor(private trainingcontestservice:TrainContestService,private _route:Router) { }

  ngOnInit() {

    this.t_contest_id=parseInt(localStorage.getItem("id1"));
    this.trainingcontestservice.getTrainingcontestByid(this.t_contest_id).subscribe(
      (data:tcontest_user_subcat_c[])=>{
        this.t_contest_id=data[0].t_contest_id;
        this.t_participants=data[0].t_participants;
        this.t_type=data[0].t_type;
        this.t_budget=data[0].t_budget;
        this.t_date=data[0].t_date;
        this.t_title=data[0].t_title;
        this.t_company=data[0].t_company;
        this.t_help=data[0].t_help;
        // this.fkuser_id=data[0].fkuser_id;
        // this.fkdesigner_id=data[0].fkdesigner_id;
        this.fksubcat_id=data[0].fksubcat_id;
      }
    );
  }
  onaddDuration(item)
  {

   this.starttime=new Date().toLocaleTimeString();
   console.log(this.starttime);
   console.log("end"+this.e_time);
   this.trainingcontestservice.updateduration(new tcontest_user_subcat_c(this.t_contest_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.starttime,this.e_time,this.fkuser_id,"",this.fksubcat_id)).subscribe(
     (data:any)=>{
       //console.log(item.email_id);
       // this._route.navigate(['/training_contest']);
       // localStorage.setItem("id1",data.insertId);
       this.cnt++;
       console.log(data);
       this._route.navigate(['contestwork']);
       localStorage.setItem("count",this.cnt+"");




     }
   );

 }

}
