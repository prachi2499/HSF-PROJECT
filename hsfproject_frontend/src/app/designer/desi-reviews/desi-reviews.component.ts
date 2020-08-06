import { Component, OnInit } from '@angular/core';
import { review_c } from '../../classes/review_class';
import { reviewuser_c } from '../../classes/reviewuser_class';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desi-reviews',
  templateUrl: './desi-reviews.component.html',
  styleUrls: ['./desi-reviews.component.css']
})
export class DesiReviewsComponent implements OnInit {

  reviewarr:review_c[]=[];
  description:string;
  fkuser_id:string;
  fkdesigner_id:string;
  stars:string;
  x:string;
  y:string;
  email_id:string;
  name:string;
  uname:string="";
uname1:string;
i:number;
startarr:String[]=[];
j:number;
p:string;
revuserarr:reviewuser_c[]=[];

  constructor(private review_ser:ReviewService,private _acroute:ActivatedRoute) { }

  ngOnInit() {

    this.x=localStorage.getItem("email_id");
      this.review_ser.getReviewByid(this.x).subscribe(
      (data:review_c[])=>{
        console.log(this.x);
        console.log(data);

        // this.description=data[0].description;
        // this.fkuser_id=data[0].fkuser_id;
        // this.stars=data[0].stars;
        // this.uname=data[0].fkuser_id;
        this.reviewarr=data;

        console.log(this.reviewarr);

        // this.review_ser.getUserById(this.uname).subscribe(
        //   (data:any[])=>{
        //     console.log('data'+data);
        //     //console.log(this.email_id);
        //     this.uname1=data[0].name;
        //     //Console.log(this.uname);
        //     console.log(this.uname);
        //   }
        // );
        this.review_ser.getAllReviewbyuser(this.x).subscribe(
          (data:reviewuser_c[])=>
          {
            console.log(data);
            this.revuserarr=data;

          }
        );

      }
      );

  }

}
