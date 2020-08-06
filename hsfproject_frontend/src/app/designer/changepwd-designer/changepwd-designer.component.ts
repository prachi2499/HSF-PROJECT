import { Component, OnInit } from '@angular/core';
import { login_class } from '../../classes/login_user_class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserloginService } from '../../services/userlogin.service';

@Component({
  selector: 'app-changepwd-designer',
  templateUrl: './changepwd-designer.component.html',
  styleUrls: ['./changepwd-designer.component.css']
})
export class ChangepwdDesignerComponent implements OnInit {
  arr:login_class[]=[];
  email_id:string;
  password:string;
  x:string;
  y:string;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _update:UserloginService) { }

  ngOnInit() {
    this.x=localStorage.getItem('email_id');
    this.y=localStorage.getItem('pwd');
      console.log(this.x);
      this._update.getUserByemailid(this.x).subscribe(
        (data:login_class[])=>{

          this.email_id=data[0].email_id;

          //this.password=data[0].password;
        }


      );
  }

  onsave(){
    this._update.updatePwd(new login_class(this.email_id,this.password)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/viewdesigner']);
      }
    );
  }

}
