import { Component, OnInit } from '@angular/core';
import { uploadclass } from '../../classes/d_upload_class';
import { desig_class } from '../../classes/designer_class';
import { Router } from '@angular/router';
import { AdvContestService } from '../../services/adv-contest.service';
import { BrandContestService } from '../../services/brand-contest.service';
import { user_adv_contest_c } from '../../classes/user_adv_contest_class';

@Component({
  selector: 'app-contestcheck-adv',
  templateUrl: './contestcheck-adv.component.html',
  styleUrls: ['./contestcheck-adv.component.css']
})
export class ContestcheckAdvComponent implements OnInit {

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
  a_contest_id:number;
  starttime:string;
  a_language:string;
  a_projectname:string;
  a_timeline:string;
  a_price:number;
  s_time:string;
  e_time:string;


  fksubcat_id:number;
  subcat_name:string;
  fkuser_id:string;


  darr:uploadclass[]=[];
  constructor(private route:Router,private _ser:AdvContestService,private brand_ser:BrandContestService) { }

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
      this.a_contest_id=parseInt(localStorage.getItem("id1"));
      console.log(this.a_contest_id)
      this._ser.getAdvertisingcontestByid(this.a_contest_id).subscribe(
        (data:user_adv_contest_c[])=>{
          console.log(data)


          this.a_contest_id=data[0].a_contest_id;
          this.a_language=data[0].a_language;
          this.a_projectname=data[0].a_projectname;
          this.a_timeline=data[0].a_timeline;
          this.a_price=data[0].a_price;
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
       this._ser.updateDesigner(new user_adv_contest_c(this.a_contest_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,this.starttime,this.e_time,this.fkuser_id,this.id,this.fksubcat_id)).subscribe(
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
