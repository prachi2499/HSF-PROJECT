import { Component, OnInit } from '@angular/core';
import { AdvContestService } from '../../services/adv-contest.service';
import { Router } from '@angular/router';
import { user_adv_contest_c } from '../../classes/user_adv_contest_class';

@Component({
  selector: 'app-adv-duration-contest',
  templateUrl: './adv-duration-contest.component.html',
  styleUrls: ['./adv-duration-contest.component.css']
})
export class AdvDurationContestComponent implements OnInit {
  durationarr:string[]=[
    "2 minutes",
    "10 minutes",
    "30 minutes",
    "1 hour",
    "3 hours",
    "24 hours"
  ];
  cnt:number=0;
  a_contest_id:number;
  starttime:string;
  a_language:string;
  a_projectname:string;
  a_timeline:string;
  a_price:number;
  s_time:string;
  e_time:string;
  fkuser_id:string;
  fkdesigner_id:string;
  fksubcat_id:number;
  subcat_name:string;
  constructor(private _advcontestserv:AdvContestService,private _route:Router) { }

  ngOnInit() {
    this.a_contest_id=parseInt(localStorage.getItem("id1"));
    this._advcontestserv.getAdvertisingcontestByid(this.a_contest_id).subscribe(
      (data:user_adv_contest_c[])=>{
        this.a_contest_id=data[0].a_contest_id;
        this.a_language=data[0].a_language;
        this.a_projectname=data[0].a_projectname;
        this.a_timeline=data[0].a_timeline;
        this.a_price=data[0].a_price;
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
   this._advcontestserv.updateduration(new user_adv_contest_c(this.a_contest_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,this.starttime,this.e_time,this.fkuser_id,"",this.fksubcat_id)).subscribe(
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
