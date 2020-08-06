import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-orderplaced',
  templateUrl: './user-orderplaced.component.html',
  styleUrls: ['./user-orderplaced.component.css']
})
export class UserOrderplacedComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  onaddreview(){
    this._route.navigate(['/add_review']);
  }

}
