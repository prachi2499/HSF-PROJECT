import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';
import { order_c } from '../classes/order_class';

@Component({
  selector: 'app-topfiveorder',
  templateUrl: './topfiveorder.component.html',
  styleUrls: ['./topfiveorder.component.css']
})
export class TopfiveorderComponent implements OnInit {

  constructor(private orderser:OrderserviceService) { }

  toparr:order_c[]=[];
  ngOnInit() {
    this.orderser.gettopfiveorder().subscribe(
      (data:order_c[])=>{
        this.toparr=data;
        console.log(this.toparr);
      }
    );
  }

}
