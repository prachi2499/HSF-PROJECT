import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  onaddreview(){
    this._route.navigate(['/add_review_admin']);
  }


}
