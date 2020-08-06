import { Component, OnInit } from '@angular/core';
import { tcontest_user_subcat_c } from '../../classes/t_user_contest_class';
import { TrainContestService } from '../../services/train-contest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-train-contest',
  templateUrl: './add-train-contest.component.html',
  styleUrls: ['./add-train-contest.component.css']
})
export class AddTrainContestComponent implements OnInit {
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
  name:string;
  fksubcat_name:string;
  designers:string[];
  tcontestmixclassarr:tcontest_user_subcat_c[]=[];
  sub_cat_id:number;

  constructor(private _Actroute:ActivatedRoute,private trainingcontestservice:TrainContestService,private _route:Router) { }

  ngOnInit() {

    this._Actroute.params.subscribe(
      (y:Params)=>{

        this.sub_cat_id=y['id'];
        console.log('subcat id'+this.sub_cat_id);
      }
      );
  }
  addtrainingcontest()
{
  this.fkuser_id=localStorage.getItem('email_id');
  this.trainingcontestservice.addTrainingcontest(new tcontest_user_subcat_c(this.t_contest_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,"","",this.fkuser_id,"",this.sub_cat_id)).subscribe(
    (data:any)=>{
        this.tcontestmixclassarr.push(new tcontest_user_subcat_c(this.t_contest_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,"","",this.fkuser_id,"",this.sub_cat_id));
        console.log(data);
        this._route.navigate(['/chooseduration_train']);
        localStorage.setItem("id1",data.insertId);
        localStorage.setItem('fkuser_id',this.fkuser_id);
        localStorage.setItem("subcat",this.sub_cat_id+" ");
        localStorage.setItem('amt',this.t_budget+" ");


    }

  );

}

}
