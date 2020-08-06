import { Component, OnInit } from '@angular/core';
import { login_class } from '../../classes/login_user_class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserloginService } from '../../services/userlogin.service';

@Component({
  selector: 'app-myprofile-designer',
  templateUrl: './myprofile-designer.component.html',
  styleUrls: ['./myprofile-designer.component.css']
})
export class MyprofileDesignerComponent implements OnInit {
  email_id: string;
  password: string;
  name: string;
  mobile_no: string;
  gender: string;
  city: string;
  address: string;
  type: string;
  viewarr:login_class[]=[];
  x:string;
  constructor(private _actroute:ActivatedRoute,private _viewser:UserloginService,private _route:Router) { }

  ngOnInit() {
    this.x=localStorage.getItem('email_id');
    // this.x=this._actroute.snapshot.params['id'];
    this._viewser.getUserByemailid(this.x).subscribe(
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
  ondone()
  {
    this._route.navigate(['/designermenu']);
  }
  onprofile()
  {
    this._route.navigate(['/editdesigner_profile']);
  }

}
