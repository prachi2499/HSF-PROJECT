import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contestwork',
  templateUrl: './contestwork.component.html',
  styleUrls: ['./contestwork.component.css']
})
export class ContestworkComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  onclick()
  {
    this._route.navigate(['home']);
  }

}
