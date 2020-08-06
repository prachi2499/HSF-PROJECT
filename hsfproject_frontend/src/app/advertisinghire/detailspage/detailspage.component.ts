import { Component, OnInit } from '@angular/core';
import { user_adv_hire_class } from '../../classes/useradv_class';
import { AdvertisingServiceService } from '../../services/advertising-service.service';
import { desig_class } from '../../classes/designer_class';
import { AdvPortfolioServiceService } from '../../services/adv-portfolio-service.service';
import { portfolio_c } from '../../classes/portfolio_class';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {

arr:portfolio_c[]=[];
desigarr:desig_class[]=[];
image_id:number;
fkdesigner_id:string;
fksubcat_id:number;
d_description:string;;
d_photo:string;
image1:string;
image2:string;
image3:string;
image4:string;
image5:string;
image6:string;
video1:string;
video2:string;
name:string;
  email_id:string;
  x:string;
  constructor(private advservice:AdvertisingServiceService,private portfolioservice:AdvPortfolioServiceService,private _acroute:ActivatedRoute) { }

  ngOnInit() {

    this._acroute.params.subscribe(
      (y:Params)=>{
        this.x=y['id'];

    console.log(this.x);
    this.portfolioservice.getPortfolioByid(this.x).subscribe(

      (data:portfolio_c[])=>{

        console.log(this.x);
        console.log(data);

        this.d_photo=data[0].d_photo;
            this.d_description=data[0].d_description;
            this.image1=data[0].image1;
            this.image2=data[0].image2;
            this.image3=data[0].image3;
            this.image4=data[0].image4;
            this.image5=data[0].image5;
            this.image6=data[0].image6;


          }
        );





              }
    );


  }
}
