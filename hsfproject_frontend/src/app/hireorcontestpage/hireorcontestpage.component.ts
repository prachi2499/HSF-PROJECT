import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hireorcontestpage',
  templateUrl: './hireorcontestpage.component.html',
  styleUrls: ['./hireorcontestpage.component.css']
})
export class HireorcontestpageComponent implements OnInit {

  fkcat:number;
  cat_id:number;
  sub_cat_id:number;
  fkuser_id:string;

  constructor(private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {

    this._actroute.params.subscribe(
      (y:Params)=>{
        this.cat_id=y['cat_id'];
        console.log('cat id'+this.cat_id);
        this.sub_cat_id=y['sub_cat_id'];
        console.log('cat id'+this.sub_cat_id);
      }
      );

  }
  onfind()
  {
    this._router.navigate(['']);
  }
  onfind1()
  {
    this._router.navigate(['']);
  }
   onclick()
  {
 if(this.cat_id==1)
 {
  this._router.navigate(['/add_adv_user',this.sub_cat_id]);

 }
 else if(this.cat_id==3)
 {
  this._router.navigate(['/add_training_user',this.sub_cat_id]);
 }
 else if(this.cat_id==2)
 {
  this._router.navigate(['/add_branding_user',this.sub_cat_id]);
 }






  }
  onclickcontest(){

    if(this.cat_id==1)
 {
  this._router.navigate(['/adv_contest_user',this.sub_cat_id]);

 }
 else if(this.cat_id==3)
 {
  this._router.navigate(['/train_contest_user',this.sub_cat_id]);
 }
 else if(this.cat_id==2)
 {
  this._router.navigate(['/brand_contest_user',this.sub_cat_id]);
 }

  }


}
