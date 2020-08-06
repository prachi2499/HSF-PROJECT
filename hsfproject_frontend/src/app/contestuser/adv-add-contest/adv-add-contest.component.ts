import { Component, OnInit } from '@angular/core';
import { adv_contest_c } from '../../classes/adv_contest_class';
import { user_adv_contest_c } from '../../classes/user_adv_contest_class';
import { AdvContestService } from '../../services/adv-contest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-adv-add-contest',
  templateUrl: './adv-add-contest.component.html',
  styleUrls: ['./adv-add-contest.component.css']
})
export class AdvAddContestComponent implements OnInit {

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


  arradv:adv_contest_c[]=[];
  a_contest_id:number;
  a_language:string;
 a_projectname:string;
    a_timeline:string;
  a_price:number;
  fksubcat_id:number;
  subcat_id:number;
  subcat_name:string;
  fkuser_id:string;
  fkdesigner_id:string;
  useradvarr:user_adv_contest_c[]=[];
  sub_cat_id:number;



  constructor(private _advcontestserv:AdvContestService,private _route:Router,private _Actroute:ActivatedRoute) { }

  ngOnInit() {
    this._Actroute.params.subscribe(
      (y:Params)=>{

        this.sub_cat_id=y['id'];
        console.log('subcat id'+this.sub_cat_id);
      }
      );
  }
  addadvcontest()
  {
    this.fkuser_id=localStorage.getItem('email_id');
    this._advcontestserv.addcontest(new user_adv_contest_c(this.a_contest_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,"","",this.fkuser_id,"",this.sub_cat_id)).subscribe(
      (data:any)=>
      {
        console.log("hii");
        this.arradv.push(new user_adv_contest_c(this.a_contest_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,"","",this.fkuser_id,"",this.sub_cat_id));
        console.log(data);
        this._route.navigate(['chooseduration_adv']);
        //localStorage.setItem("a_id",data.insertId);
        localStorage.setItem("id1",data.insertId);
        localStorage.setItem('fkuser_id',this.fkuser_id);
        localStorage.setItem("subcat",this.sub_cat_id+" ");
        localStorage.setItem('amt',this.a_price+" ");
      }
    );

  }

  onCancel()
  {
    this._route.navigate(['home']);
  }

}
