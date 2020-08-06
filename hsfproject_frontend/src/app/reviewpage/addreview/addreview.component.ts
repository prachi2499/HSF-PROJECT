import { Component, OnInit } from '@angular/core';
import { review_c } from '../../classes/review_class';
import { ReviewService } from '../../services/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  review_id:number;
  description:string;
  fkuser_id:string;
  fkdesigner_id:string;
  stars:number;
  arr:review_c[]=[];
  constructor(private revser:ReviewService,private _route:Router) { }

  ngOnInit() {
  }
  onaddreview()
  {
    this.fkuser_id=localStorage.getItem("email_id");

    this.fkdesigner_id=localStorage.getItem("dname");
    this.revser.addreviews(new review_c(this.review_id,this.description,this.fkuser_id,this.fkdesigner_id,this.stars)).subscribe(
      (data:any)=>{
          this.arr.push(new review_c(this.review_id,this.description,this.fkuser_id,this.fkdesigner_id,this.stars));
          console.log(data);

        console.log("add done");
         this._route.navigate(['/home']);



      }

    );

  }
}
