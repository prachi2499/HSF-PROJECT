import { Component, OnInit } from '@angular/core';
import { BrandContestService } from '../../services/brand-contest.service';
import { user_b_contest_class } from '../../classes/user_b_contest_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-contest',
  templateUrl: './notification-contest.component.html',
  styleUrls: ['./notification-contest.component.css']
})
export class NotificationContestComponent implements OnInit {
  b_id:number;
  s_time:string;
  e_time:string;
  b_contest_id:number;
  b_language:string;
  b_subject :string;
  b_design:string;
  b_description :string;
  b_budget:number;
  fksubcat_id:number;
  fkuser_id:string;
  fkdesigner_id:string="";
  subcat_id:number;
  subcat_name:string;
  cnt:number;
  constructor(private branding_ser:BrandContestService,private route:Router) { }

  ngOnInit() {

    this.getAlldata();
        this.cnt=parseInt(localStorage.getItem('count'));
        console.log("COUNT  : "+this.cnt);
  }

  getAlldata()
  {
    this.b_contest_id=parseInt(localStorage.getItem("id1"));
    //console.log("b_id :"+this.b_contest_id);
    this.branding_ser.getBrandingById(this.b_contest_id).subscribe(
      (data:user_b_contest_class[])=>{
        console.log(data);
        this.b_contest_id=data[0].b_contest_id;
        this.b_language=data[0].b_language;
        this.b_subject=data[0].b_subject;
        this.b_design=data[0].b_design;
        this.b_description=data[0].b_description;
        this.b_budget=data[0].b_budget;
        this.fkuser_id=data[0].fkuser_id;
        this.fksubcat_id=data[0].fksubcat_id;
      }


    );

  }

  onupload(){

    this.route.navigate(['uploadimg']);

  }


}
