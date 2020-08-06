import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debituser',
  templateUrl: './debituser.component.html',
  styleUrls: ['./debituser.component.css']
})
export class DebituserComponent implements OnInit {

  constructor(private route:Router) { }
o_amount:number;
  ngOnInit() {
    this.o_amount=parseInt(localStorage.getItem("amt"));
  }

  onclickdebit()
  {
    this.route.navigate(['/user_orplace']);
  }

}
