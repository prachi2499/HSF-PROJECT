import { Component, OnInit } from '@angular/core';
import { WorkgallService } from '../services/workgall.service';
import { portfolio_c } from '../classes/portfolio_class';
import { OrderserviceService } from '../services/orderservice.service';
import { portfoliouser_c } from '../classes/portfoliouser_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewalldesigner-admin',
  templateUrl: './viewalldesigner-admin.component.html',
  styleUrls: ['./viewalldesigner-admin.component.css']
})
export class ViewalldesignerAdminComponent implements OnInit {

  constructor(private _abc:WorkgallService,private _data:OrderserviceService,private _route:Router) { }

  arr:portfolio_c[]=[];
  arrportuser:portfoliouser_c[]=[];
  fkdesigner_id:string;
  dname:string="";
  ngOnInit() {
    this._abc.getalldesigname().subscribe(
      (data:portfoliouser_c[])=>{
        this.arrportuser=data;
      }
    );


  }
  ondetail(item){
    this._route.navigate(['details',item.email_id]);
  }

}
