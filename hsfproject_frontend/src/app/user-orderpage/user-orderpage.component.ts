import { Component, OnInit } from '@angular/core';
import { order_c } from '../classes/order_class';
import { OrderserviceService } from '../services/orderservice.service';
import { Router } from '@angular/router';
import { AdvertisingServiceService } from '../services/advertising-service.service';
import { timeout } from 'q';

@Component({
  selector: 'app-user-orderpage',
  templateUrl: './user-orderpage.component.html',
  styleUrls: ['./user-orderpage.component.css']
})
export class UserOrderpageComponent implements OnInit {


  orderarr:order_c[]=[];
  fksubcat_id:number;
  fkuser_id:string="dhruvi@gmail.com";
  fkdesigner_id:string;
  o_date:Date;
  o_amount:number;
  fka_id:number;
  o_id:number;
  sub_order_date:string;
  month:string;
  d:number;
  yr:number;
  dname:string="";
  uname:string="";
  sname:string="";
  constructor(private orderser:OrderserviceService,private route:Router,private advserv:AdvertisingServiceService,private _data:OrderserviceService) { }

  ngOnInit() {

    this.sub_order_date=new Date().toLocaleDateString();

    console.log(this.month);



    this.fkuser_id=localStorage.getItem("email_id");
    this.fksubcat_id=parseInt(localStorage.getItem("subcat"));
    this.fkdesigner_id=localStorage.getItem("dname");
    this.o_amount=parseInt(localStorage.getItem("amt"));
    this.fka_id=parseInt(localStorage.getItem("id1"));

    console.log('date'+this.o_date);
    this._data.getUserByName(this.fkdesigner_id).subscribe(
      (data:any)=>{
          this.dname=data[0].name;

      }

    );
    console.log('did'+this.dname);

    this._data.getUserByName(this.fkuser_id).subscribe(
      (data:any)=>{
          this.uname=data[0].name;

      }

    );

    this._data.getSubcatByName(this.fksubcat_id).subscribe(
      (data:any)=>{
          this.sname=data[0].subcat_name;

      }

    );

    this.orderser.addOrder(new order_c(this.o_id,this.fksubcat_id,this.fkuser_id,this.fkdesigner_id,this.sub_order_date,this.o_amount,this.fka_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.orderarr.push(new order_c(this.o_id,this.fksubcat_id,this.fkuser_id,this.fkdesigner_id,this.sub_order_date,this.o_amount,this.fka_id));
        console.log(this.orderarr);




      }
    );
  }

  oncredit()
  {
    this.route.navigate(['/usercredit']);
  }
  ondebit()
  {
    this.route.navigate(['/userdebit']);
  }

}
