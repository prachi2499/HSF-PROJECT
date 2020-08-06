import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  fkuser_id:string;
  id:string;
  constructor(private _route:Router) { }

public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      'http://localhost:3000/images/l1.png',
      'http://localhost:3000/images/v1.png',
      'http://localhost:3000/images/signboard.jpg',
      'http://localhost:3000/images/bro1.png',
      'http://localhost:3000/images/br1.jpg',
      'http://localhost:3000/images/l3.jpg',
      'http://localhost:3000/images/logo1.png',
      'http://localhost:3000/images/b2.png',
      'http://localhost:3000/images/trainer5.jpg',
      'http://localhost:3000/images/b1.webp',

      ];
  }

  onclickview()
  {
    this._route.navigate(['/viewuser']);
  }
  onclickedit()
  {
    this._route.navigate(['/edituser']);
  }
  onclickpwd()
  {
    this._route.navigate(['/changepwd']);
  }
  onCheckContest()
  {
     this.id=localStorage.getItem("email_id");
     this.fkuser_id=localStorage.getItem("fkuser_id");

     if(this.fkuser_id==this.id)
     {
      this._route.navigate(['/selectcat_contest']);
     }
    else
     {
       alert('START THE CONTEST');
    }
  }
}
