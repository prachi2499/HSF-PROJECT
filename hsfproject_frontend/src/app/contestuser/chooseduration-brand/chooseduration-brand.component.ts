import { Component, OnInit } from '@angular/core';
import { BrandContestService } from '../../services/brand-contest.service';
import { Router } from '@angular/router';
import { user_b_contest_class } from '../../classes/user_b_contest_class';

@Component({
  selector: 'app-chooseduration-brand',
  templateUrl: './chooseduration-brand.component.html',
  styleUrls: ['./chooseduration-brand.component.css']
})
export class ChoosedurationBrandComponent implements OnInit {
  durationarr:string[]=[
    "2 minutes",
    "10 minutes",
    "30 minutes",
    "1 hour",
    "3 hours",
    "24 hours"
  ];
  cnt:number=0;
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
  constructor(private branding_ser:BrandContestService,private _route:Router) { }

  ngOnInit() {

    this.b_contest_id=parseInt(localStorage.getItem("id1"));

    this.branding_ser.getBrandingById(this.b_contest_id).subscribe(
      (data:user_b_contest_class[])=>{
        // console.log(data);
        this.b_contest_id=data[0].b_contest_id;
        this.b_language=data[0].b_language;
        this.b_subject=data[0].b_subject;
        this.b_design=data[0].b_design;
        this.b_description=data[0].b_description;
        this.b_budget=data[0].b_budget;
        this.fksubcat_id=data[0].fksubcat_id;
      }
    );
  }

  OnAddDuration(item){
    this.s_time=new Date().toLocaleTimeString();
    console.log(this.s_time);
    console.log("end time"+this.e_time);
    this.branding_ser.updateDuration(new user_b_contest_class(this.b_contest_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_budget,this.s_time,this.e_time,this.fkuser_id,"",this.fksubcat_id)).subscribe(
      (data:any)=>{

        this.cnt++;
        console.log(data);
        this._route.navigate(['contestwork']);
        localStorage.setItem("count",this.cnt+"");
      }
    );

  }
}
