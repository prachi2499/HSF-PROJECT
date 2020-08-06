import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hireorcontestadminpage',
  templateUrl: './hireorcontestadminpage.component.html',
  styleUrls: ['./hireorcontestadminpage.component.css']
})
export class HireorcontestadminpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclick()
  {
    this.route.navigate(['/advertise_hire']);
  }

}
