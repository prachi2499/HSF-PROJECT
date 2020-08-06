import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-hireorcontest',
  templateUrl: './training-hireorcontest.component.html',
  styleUrls: ['./training-hireorcontest.component.css']
})
export class TrainingHireorcontestComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclick()
  {
    this.route.navigate(['/train_hire_admin']);
  }
}
