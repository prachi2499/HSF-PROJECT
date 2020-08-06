import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectcat-contest',
  templateUrl: './selectcat-contest.component.html',
  styleUrls: ['./selectcat-contest.component.css']
})
export class SelectcatContestComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclickbrand(){

    this.route.navigate(['contestcheck']);


  }
  onclickadv()
  {

    this.route.navigate(['contestcheck_adv']);

  }
  onclicktrain()
  {
    this.route.navigate(['contestcheck_train']);
  }

}
