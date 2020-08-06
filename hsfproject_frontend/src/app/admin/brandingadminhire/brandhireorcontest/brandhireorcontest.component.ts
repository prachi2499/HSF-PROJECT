import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brandhireorcontest',
  templateUrl: './brandhireorcontest.component.html',
  styleUrls: ['./brandhireorcontest.component.css']
})
export class BrandhireorcontestComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclick()
  {
    this.route.navigate(['/brand_hire_admin']);
  }

}
