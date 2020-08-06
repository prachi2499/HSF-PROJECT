import { Component, OnInit } from '@angular/core';
import { portfolio_c } from '../../classes/portfolio_class';
import { OrderserviceService } from '../../services/orderservice.service';

@Component({
  selector: 'app-photowork-desig',
  templateUrl: './photowork-desig.component.html',
  styleUrls: ['./photowork-desig.component.css']
})
export class PhotoworkDesigComponent implements OnInit {

  constructor(private _ser:OrderserviceService) { }
arr:portfolio_c[]=[];
id:string;
  ngOnInit() {
    this.id=localStorage.getItem("email_id");
    this._ser.getphoto(this.id).subscribe(
      (data:portfolio_c[])=>{
        this.arr=data;
      }
    );

  }

}
