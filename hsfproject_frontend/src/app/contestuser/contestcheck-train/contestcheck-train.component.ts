import { Component, OnInit } from '@angular/core';
import { uploadclass } from '../../classes/d_upload_class';
import { desig_class } from '../../classes/designer_class';
import { Router } from '@angular/router';
import { TrainContestService } from '../../services/train-contest.service';
import { BrandContestService } from '../../services/brand-contest.service';
import { tcontest_user_subcat_c } from '../../classes/t_user_contest_class';

@Component({
  selector: 'app-contestcheck-train',
  templateUrl: './contestcheck-train.component.html',
  styleUrls: ['./contestcheck-train.component.css']
})
export class ContestcheckTrainComponent implements OnInit {
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

  fksubcat_id:number;
  subcat_name:string;



  darr:uploadclass[]=[];
  constructor(private route:Router,private _ser:TrainContestService,private brand_ser:BrandContestService) { }

  ngOnInit() {

    this.fkcontest_id=parseInt(localStorage.getItem("fkcontest_id"));
    this.u_id=localStorage.getItem("fkuser_id");
    console.log("id :"+this.fkcontest_id);
    console.log("u_id :"+this.u_id);
    //console.log("d_id : "+this.id);

    this.brand_ser.getImageById(this.fkcontest_id,this.u_id).subscribe(
      (data:uploadclass[])=>{
      this.arr=data;
      console.log(this.arr[0].fkdesigner_id);
    }
    );

      //this.x=this._acroute.snapshot.params['id1'];
      this.t_contest_id=parseInt(localStorage.getItem("id1"));
      console.log(this.t_contest_id)
      this._ser.getTrainingcontestByid(this.t_contest_id).subscribe(
        (data:tcontest_user_subcat_c[])=>{
          console.log(data)


          this.t_contest_id=data[0].t_contest_id;
          this.t_participants=data[0].t_participants;
          this.t_type=data[0].t_type;
          this.t_budget=data[0].t_budget;
          this.t_date=data[0].t_date;
          this.t_title=data[0].t_title;
          this.t_company=data[0].t_company;
          this.t_help=data[0].t_help;

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

      this.brand_ser.getalldesigname_contest(this.fkcontest_id).subscribe(
        (data:uploadclass[])=>{
          this.darr=data;
        }
      );
  }
  Onselected(item)
  {
    console.log(item);
    this.brand_ser.getImageById(this.fkcontest_id,this.u_id).subscribe(
      (data:uploadclass[])=>{
       this.arr=data;
       this.id=item.fkdesigner_id;
       this.id1=parseInt(localStorage.getItem("id1"));
       alert(this.id+"  CONGRATIONS YOU ARE SELECTED");

       this.id=localStorage.getItem("d_id");

       this.fkdesigner_id=item.email_id;
       console.log(this.id);
       this._ser.updateDesigner(new tcontest_user_subcat_c(this.t_contest_id,this.t_participants,this.t_type,this.t_budget,this.t_date,this.t_title,this.t_company,this.t_help,this.starttime,this.e_time,this.fkuser_id,this.id,this.fksubcat_id)).subscribe(
         (data:any)=>{
           //alert("Updated details successfully");
          //this._route.navigate(['/brandinghire']);
          console.log(data);
       }
       );
      this.route.navigate(['user_order']);
      localStorage.setItem("dname",this.id);

    }

    );

  }

}
