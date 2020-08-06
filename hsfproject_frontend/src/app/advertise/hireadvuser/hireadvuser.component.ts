import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AdvertisingServiceService } from '../../services/advertising-service.service';
import { adv_hire_class } from '../../classes/a_hire_class';
import { user_adv_hire_class } from '../../classes/useradv_class';

@Component({
  selector: 'app-hireadvuser',
  templateUrl: './hireadvuser.component.html',
  styleUrls: ['./hireadvuser.component.css']
})
export class HireadvuserComponent implements OnInit {


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

  arradv:adv_hire_class[]=[];
  useradvarr:user_adv_hire_class[]=[];
  a_id:number;
  a_language:string;
 a_projectname:String;
    a_timeline:String;
  a_price:number;
  fksubcat_id:number;
  fkuser_id:string;
  fkdesigner_id:string;

  sub_cat_id:number;
  constructor(private _router:Router,private _actroute:ActivatedRoute,private _addservice:AdvertisingServiceService,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this._actroute.params.subscribe(
      (y:Params)=>{

        this.sub_cat_id=y['id'];
        console.log('subcat id'+this.sub_cat_id);
      }
      );


  }

  addAdv()
  {
    this.fkuser_id=localStorage.getItem("email_id");
    console.log('on save called');
    this._addservice.addAdvertise(new user_adv_hire_class(this.a_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,this.fkuser_id,"",this.sub_cat_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
       // this.arradv.push(new user_adv_hire_class(this.a_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,"dhruvi@gmail.com","",this.sub_cat_id));
        this._router.navigate(['selectdesigner_user']);
      //  this._router.navigate(['/choosedesigner',this.a_id]);
        localStorage.setItem("id1",data.insertId);

        localStorage.setItem("subcat",this.sub_cat_id+" ");
        localStorage.setItem('amt',this.a_price+" ");

      }
    );
  }

}

