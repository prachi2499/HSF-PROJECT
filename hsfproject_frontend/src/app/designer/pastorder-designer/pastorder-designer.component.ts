import { Component, OnInit } from '@angular/core';
import { order_c } from '../../classes/order_class';
import { user_b_contest_class } from '../../classes/user_b_contest_class';
import { OrderserviceService } from '../../services/orderservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastorder-designer',
  templateUrl: './pastorder-designer.component.html',
  styleUrls: ['./pastorder-designer.component.css']
})
export class PastorderDesignerComponent implements OnInit {
  id:string;
  dname:string;
  pastorderarr:order_c[]=[];
  username_arr:user_b_contest_class[]=[];
  user_id:string;
  arrname:order_c[]=[];
  fkuser_id:string;
  constructor(private order_ser:OrderserviceService,private _route:Router) { }

  ngOnInit() {

    this.id=localStorage.getItem('email_id');



        this.order_ser.getpastOrder(this.id).subscribe(
      (data:any[])=>
      {
        this.arrname=data;
        console.log(this.arrname);
      }
    );

    this.order_ser.getpastOrdername(this.id).subscribe(
      (data:order_c[])=>{
        this.arrname=data;
        console.log(this.arrname);
      }
    );

  }

}
