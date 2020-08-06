import { Component, OnInit } from '@angular/core';
import { user_b_contest_class } from '../../classes/user_b_contest_class';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BrandContestService } from '../../services/brand-contest.service';

@Component({
  selector: 'app-brand-add-contest-user',
  templateUrl: './brand-add-contest-user.component.html',
  styleUrls: ['./brand-add-contest-user.component.css']
})
export class BrandAddContestUserComponent implements OnInit {
  b_id:number;
  b_language:string;
  b_subject :string;
  b_design:string;
  b_description :string;
  b_budget:number;
  fksubcat_id:number;
  fkuser_id:string;
  fkdesigner_id:string="";
  selectedFile:File=null;
  Image:string;
  branding_arr:user_b_contest_class[]=[];
  sub_cat_id:number;
  arrlanguage:string[]=[
    "English",
    "Gujarati",
    "Hindi",
    "Marathi",
    "Telegu"
  ];
  constructor(private _route:Router,private branding_ser:BrandContestService,private _Actroute:ActivatedRoute) { }

  ngOnInit() {
    this._Actroute.params.subscribe(
      (y:Params)=>{

        this.sub_cat_id=y['id'];
        console.log('subcat id'+this.sub_cat_id);
      }
      );
  }
  OnAdd()
  {
    this.fkuser_id=localStorage.getItem('email_id');
    this.branding_ser.addBranding(new user_b_contest_class(this.b_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_budget,"","",this.fkuser_id,"",this.sub_cat_id)).subscribe(
      (data:any)=>{
        console.log(data);
        this.branding_arr.push(new user_b_contest_class(this.b_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_budget,"","",this.fkuser_id,"",this.sub_cat_id));
        this._route.navigate(['chooseduration']);
        localStorage.setItem("id1",data.insertId);
        localStorage.setItem('fkuser_id',this.fkuser_id);
        localStorage.setItem("subcat",this.sub_cat_id+" ");
        localStorage.setItem('amt',this.b_budget+" ");





       // console.log(this.branding_arr);
      }
    );
  }
  onCancel()
  {
    this._route.navigate(['home']);
  }

}
