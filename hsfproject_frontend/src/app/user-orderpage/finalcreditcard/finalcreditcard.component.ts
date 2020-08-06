import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalcreditcard',
  templateUrl: './finalcreditcard.component.html',
  styleUrls: ['./finalcreditcard.component.css']
})
export class FinalcreditcardComponent implements OnInit {


  constructor(private route:Router) { }
  o_amount:number;
  cvv:number;
  ngOnInit() {

    this.o_amount=parseInt(localStorage.getItem("amt"));
  }

  onclickcredit()
  {
    this.route.navigate(['/user_orplace']);
  }

}
