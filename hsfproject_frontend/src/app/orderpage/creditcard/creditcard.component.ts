import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor(private route:Router) { }

  o_amount:number;
  ngOnInit() {

    this.o_amount=parseInt(localStorage.getItem("amt"));
  }

  onclickcredit()
  {
    this.route.navigate(['/orplace']);
  }

}
