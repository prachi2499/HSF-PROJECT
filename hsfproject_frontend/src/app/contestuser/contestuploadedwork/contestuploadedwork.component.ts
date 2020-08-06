import { Component, OnInit } from '@angular/core';
import { uploadclass } from '../../classes/d_upload_class';
import { BrandContestService } from '../../services/brand-contest.service';
import { Router } from '@angular/router';
import { desig_class } from '../../classes/designer_class';
import { user_b_contest_class } from '../../classes/user_b_contest_class';

@Component({
  selector: 'app-contestuploadedwork',
  templateUrl: './contestuploadedwork.component.html',
  styleUrls: ['./contestuploadedwork.component.css']
})
export class ContestuploadedworkComponent implements OnInit {
  u_id:string;
  dc_id:string;
  dc_image:string;
  fkcontest_id :number;
  fkdesigner_id:string;
  arr:uploadclass[];
  dname:string;
  id:string;
  id1:number;

  designerarr:desig_class[]=[];
  x:string;
  b_contest_id:number;
  b_language:string;
  b_subject:string;
  b_design:string;
  b_description:string;
  b_budget:number;
  s_time:string;
  e_time:string;
  fkuser_id:string;

  fksubcat_id:number;
  darr:uploadclass[]=[];

  constructor(private _serve:BrandContestService,private _route:Router) { }

  ngOnInit() {
    this.fkcontest_id=parseInt(localStorage.getItem("fkcontest_id"));
    this.u_id=localStorage.getItem("fkuser_id");
    console.log("id :"+this.fkcontest_id);
    console.log("u_id :"+this.u_id);
    //console.log("d_id : "+this.id);

    this._serve.getImageById(this.fkcontest_id,this.u_id).subscribe(
      (data:uploadclass[])=>{
      this.arr=data;
      console.log(this.arr[0].fkdesigner_id);
    }
    );

      //this.x=this._acroute.snapshot.params['id1'];
      this.b_contest_id=parseInt(localStorage.getItem("id1"));
      console.log(this.b_contest_id)
      this._serve.getBrandingById(this.b_contest_id).subscribe(
        (data:user_b_contest_class[])=>{
          console.log(data)
          this.b_contest_id=data[0].b_contest_id;
          this.b_language=data[0].b_language;
          this.b_subject=data[0].b_subject;
          this.b_design=data[0].b_design;
          this.b_description=data[0].b_description;
          this.b_budget=data[0].b_budget;
          this.s_time=data[0].s_time;
          this.e_time=data[0].e_time;
          this.fksubcat_id=data[0].fksubcat_id;
      }
      );
      // this._serve.getallDesigners().subscribe(

      //   (data:desig_class[])=>
      //   {
      //       this.designerarr=data;
      //   }
      // );

      this._serve.getalldesigname_contest(this.fkcontest_id).subscribe(
        (data:uploadclass[])=>{
          this.darr=data;
        }
      );
  }
  Onselected(item)
  {
    console.log(item);
    this._serve.getImageById(this.fkcontest_id,this.u_id).subscribe(
      (data:uploadclass[])=>{
       this.arr=data;
       this.id=item.fkdesigner_id;
       this.id1=parseInt(localStorage.getItem("id1"));
       alert(this.id+"  CONGRATIONS YOU ARE SELECTED");

       this.id=localStorage.getItem("d_id");

       this.fkdesigner_id=item.email_id;
       console.log(this.id);
       this._serve.updateDesigner(new user_b_contest_class(this.b_contest_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_budget,this.s_time,this.e_time,this.fkuser_id,this.id,this.fksubcat_id)).subscribe(
         (data:any)=>{
           //alert("Updated details successfully");
          //this._route.navigate(['/brandinghire']);
          console.log(data);
       }
       );
      this._route.navigate(['user_order']);
      localStorage.setItem("dname",this.id);

    }

    );

  }

}
