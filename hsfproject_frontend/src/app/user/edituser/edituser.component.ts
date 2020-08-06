import { Component, OnInit } from '@angular/core';
import { login_class } from '../../classes/login_user_class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserloginService } from '../../services/userlogin.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {


  email_id: string;
  password: string;
  name: string;
  mobile_no: string;
  gender: string;
  city: string;
  address: string;
  type: string;
  editarr:login_class[]=[];
  x:string;

  constructor(private _actroute:ActivatedRoute,private _updateser:UserloginService,private _route:Router) { }

  ngOnInit() {

    this.x=localStorage.getItem('email_id');

    this._updateser.getUserByemailid(this.x).subscribe(
      (data:login_class[])=>{
        this.email_id=data[0].email_id;
        this.password=data[0].password;
        this.name=data[0].name;
       this.mobile_no=data[0].mobile_no;
        this.gender=data[0].gender;
        this.city=data[0].city;
        this.address=data[0].address;
        this.type=data[0].type;
      }
    );
  }

  onsavechange()
  {
    this._updateser.updateUser(new login_class(this.email_id,this.password,this.name,this.mobile_no,this.gender,this.city,this.address,this.type)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/viewuser']);
      }
    );
  }

}
