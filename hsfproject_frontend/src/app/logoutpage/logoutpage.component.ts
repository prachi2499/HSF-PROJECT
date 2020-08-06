import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutpage',
  templateUrl: './logoutpage.component.html',
  styleUrls: ['./logoutpage.component.css']
})
export class LogoutpageComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
   alert("THANKS FOR VISITING.");
    this._route.navigate(['']);
    localStorage.setItem('email_id',"");

  }

}
