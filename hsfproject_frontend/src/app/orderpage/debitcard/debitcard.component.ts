import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.css']
})
export class DebitcardComponent implements OnInit {

  constructor(private route:Router) { }

  o_amount:number;
  ngOnInit() {
    this.o_amount=parseInt(localStorage.getItem("amt"));
  }
  onclickdebit()
  {
    this.route.navigate(['/orplace']);
  }

}
