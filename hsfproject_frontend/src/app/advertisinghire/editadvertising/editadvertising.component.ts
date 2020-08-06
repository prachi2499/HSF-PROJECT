import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router } from '@angular/router';
import { adv_hire_class } from '../../classes/a_hire_class';
import { AdvertisingServiceService } from '../../services/advertising-service.service';
import { user_adv_hire_class } from '../../classes/useradv_class';


@Component({
  selector: 'app-editadvertising',
  templateUrl: './editadvertising.component.html',
  styleUrls: ['./editadvertising.component.css']
})
export class EditadvertisingComponent implements OnInit {

  arradv:adv_hire_class[]=[];
  useradvarr:user_adv_hire_class[]=[];
  a_id:number;
  a_language:string;
 a_projectname:String;
    a_timeline:String;
  a_price:number;


  x:number;

  arrlanguage:string[]=[
    'English',
    'Hindi',
    'Gujarati',
    'Marathi',
    'Telgu'
  ];
  arrtimeline:string[]=[
    '48 hours',
    '1 week',
    '2 weeks',
    '1 month'
  ];

  constructor(private adv_ser:AdvertisingServiceService,private _route:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {

    this.x=this._actroute.snapshot.params['id'];
    this.adv_ser.getAdvertisingByid(this.x).subscribe(
      (data:user_adv_hire_class[])=>{
        console.log(data);
        this.a_id=data[0].a_id;
        this.a_language=data[0].a_language;
        this.a_projectname=data[0].a_projectname;
        this.a_timeline=data[0].a_timeline;
        this.a_price=data[0].a_price;

      }
    );
  }

  onsave(){

    this.adv_ser.updateAdvertise(new user_adv_hire_class(this.a_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price)).subscribe(
      (data:any)=>{
        console.log(data);

        this._route.navigate(['/advertise_hire']);
      }
    );
  }

}
