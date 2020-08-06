import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login_class } from '../../classes/login_user_class';
import { UserloginService } from '../../services/userlogin.service';
import { sendmail_c } from '../../classes/sendmail_class';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  email_id:string;
  password:string;
  hide:boolean=true;
  type:string;
  login_arr:login_class[]=[];
  subject1:"HSF FORGET PASSWORD";
  constructor(private login_ser:UserloginService,private _route:Router) { }

  ngOnInit() {
  }


  onlogin(){

    this.login_ser.getUserById(new login_class(this.email_id,this.password)).subscribe(

      (data:login_class[])=>{

        if(data.length==1)
        {
          localStorage.setItem('email_id',this.email_id);
          localStorage.setItem("pwd",this.password);
          this.type=data[0].type;
          if(this.type=='Admin')
          {
            this._route.navigate(['/menu']);
          }
          else if(this.type=='Designer')
          {

            this._route.navigate(['/designermenu']);

          }
          else
          {
            this._route.navigate(['/home']);
          }
       }
        else{
          alert("Invalid Email Or Password");
        }
      }
  );
}

onsignup()
{
  this._route.navigate(['/signup']);
}
onforgetpassword()
{
  this.login_ser.forgetpassword(this.email_id).subscribe(
    (data:login_class[])=>{
      if(data.length>0)
      {
        this.password=data[0].password;
        this.login_ser.sendmail(new sendmail_c(this.email_id,this.subject1,"your password is"+this.password)).subscribe(
          (data:sendmail_c)=>{

          }
        );
        alert("password will send on your account");
      }
      else{
        alert("email id is not correct");
      }
    }
  );
}

}
