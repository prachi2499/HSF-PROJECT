import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login_class } from '../../classes/login_user_class';
import { UserloginService } from '../../services/userlogin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email_id: string;
  password: string;
  name: string;
  mobile_no: string;
  gender: string;
  city: string;
  address: string;
  type: string;
  signuparr:login_class[]=[];


  constructor(private user_ser:UserloginService,private _route:Router) { }

  ngOnInit() {
  }
  onadd(){
    this.user_ser.adduser(new login_class(this.email_id,this.password,this.name,this.mobile_no,this.gender,this.city,this.address,this.type)).subscribe(
      (data:login_class[])=>
      {
        console.log(data);
        this.signuparr.push(new login_class(this.email_id,this.password,this.name,this.mobile_no,this.gender,this.city,this.address,this.type));
        this._route.navigate(['/login']);
      }
    );
  }


  oncancel()
  {
    this._route.navigate(['/login']);
  }



}
