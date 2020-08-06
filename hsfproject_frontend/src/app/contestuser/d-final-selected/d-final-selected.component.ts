import { Component, OnInit } from '@angular/core';
import { desig_class } from '../../classes/designer_class';
import { Router } from '@angular/router';
import { BrandContestService } from '../../services/brand-contest.service';
import { user_b_contest_class } from '../../classes/user_b_contest_class';

@Component({
  selector: 'app-d-final-selected',
  templateUrl: './d-final-selected.component.html',
  styleUrls: ['./d-final-selected.component.css']
})
export class DFinalSelectedComponent implements OnInit {
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
  fkdesigner_id:string;
  fksubcat_id:number;
  id:string;
  constructor(private _route:Router,private _serve:BrandContestService) { }

  ngOnInit() {

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
     this._serve.getallDesigners().subscribe(

       (data:desig_class[])=>
       {
           this.designerarr=data;
       }
     );
  }

  ok(item)
  {
    this.id=localStorage.getItem("d_id");

    this.fkdesigner_id=item.email_id;
    console.log(this.id);
    this._serve.updateDesigner(new user_b_contest_class(this.b_contest_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_budget,this.s_time,this.e_time,this.fkuser_id,this.id,this.fksubcat_id)).subscribe(
      (data:any)=>{
        alert("Updated details successfully");
       //this._route.navigate(['/brandinghire']);
       console.log(data);
    }
    );
  }


}
