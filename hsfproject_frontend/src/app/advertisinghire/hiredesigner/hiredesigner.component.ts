import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisingServiceService } from '../../services/advertising-service.service';
import { adv_hire_class } from '../../classes/a_hire_class';
import { user_adv_hire_class } from '../../classes/useradv_class';
import { cat_subcat_c } from '../../classes/cat_subcat_class';
import { SubcatserService } from '../../services/subcatser.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-hiredesigner',
  templateUrl: './hiredesigner.component.html',
  styleUrls: ['./hiredesigner.component.css']
})
export class HiredesignerComponent implements OnInit {

  advdatasource=new MatTableDataSource();
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
  subcat_name:string;
  subcat_id:number;
  selected_subcat:cat_subcat_c;
  sub_catnamearr:cat_subcat_c[];



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

  constructor(private _router:Router,private _addservice:AdvertisingServiceService,private subcat_ser:SubcatserService) { }

  ngOnInit() {
    this.fkuser_id=localStorage.getItem("email_id");
    this.getAllSubCategory();
  }
  getAllSubCategory(){
    this.subcat_ser.getAllSubcategory().subscribe(
      (data:any)=>{
        this.sub_catnamearr=data;

      }
    );
  }
  onsave()
{
  this._addservice.addAdvertise(new user_adv_hire_class(this.a_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,this.fkuser_id,"",this.fksubcat_id)).subscribe(
    (data:any)=>
    {
      console.log(data);

      this.arradv.push(new user_adv_hire_class(this.a_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,this.fkuser_id,"",this.fksubcat_id));
      this._router.navigate(['/choosedesigner']);

      localStorage.setItem("id1",data.insertId);


       localStorage.setItem("subcat",this.fksubcat_id+" ");
      //localStorage.setItem("subcat",this.selected_subcat.subcat_id+" ");
      localStorage.setItem('amt',this.a_price+" ");

    }
  );
}

}
