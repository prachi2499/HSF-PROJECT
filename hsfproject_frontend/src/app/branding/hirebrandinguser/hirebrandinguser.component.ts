import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { b_hireclass } from '../../classes/b_hire_class';
import { user_b_hire_class } from '../../classes/branding_user_class';
import { BrandingHireService } from '../../services/branding-hire.service';

@Component({
  selector: 'app-hirebrandinguser',
  templateUrl: './hirebrandinguser.component.html',
  styleUrls: ['./hirebrandinguser.component.css']
})
export class HirebrandinguserComponent implements OnInit {


  b_id:number;
  b_language:string;
  b_subject :string;
  b_design:string;
  b_description :string;
  b_timeline:string;
  b_budget:number;
  b_link:string;
  b_image:string;
  fksubcat_id:number;
  subcat_id:number;
  subcat_name:string;
  fkuser_id:string;
  fkdesigner_id:string="";
  selectedFile:File=null;
  Image:string;
  branding_arr:user_b_hire_class[]=[];


  arrtimeline:string[]=[
    '48 hours',
    '1 week',
    '2 weeks',
    '1 month'

  ];
  language:string[]=[
    "English",
    "Gujarati",
    "Hindi",
    "Marathi",
    "Telegu"
  ];
  sub_cat_id:number;
  constructor(private branding_ser:BrandingHireService,private _route:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {

    this._actroute.params.subscribe(
      (y:Params)=>{

        this.sub_cat_id=y['id'];
        console.log('subcat id'+this.sub_cat_id);
      }
      );

  }

  OnAdd(){
    this.fkuser_id=localStorage.getItem("email_id");

    const fd=new FormData;
    fd.append('b_id',this.b_id+"");
    fd.append('b_language',this.b_language);
    fd.append('b_subject',this.b_subject);
    fd.append('b_design',this.b_design);
    fd.append('b_description',this.b_description);
    fd.append('b_timeline',this.b_timeline);
    fd.append('b_budget',this.b_budget+"");
    fd.append('b_link',this.b_link);
    fd.append('Image',this.selectedFile,this.selectedFile.name);
    fd.append('fkuser_id',this.fkuser_id+"");
    fd.append('fkdesigner_id',this.fkdesigner_id+"");
    fd.append('fksubcat_id',this.sub_cat_id+"");


    this.branding_ser.addBranding(fd).subscribe(
      (data:any)=>{
        console.log(data);
        this.branding_arr.push(new user_b_hire_class(this.b_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_timeline,this.b_budget,this.b_link,this.Image,this.fkuser_id,"",this.sub_cat_id));
        console.log(this.subcat_id);
        this._route.navigate(['/selectdesi_branding']);
        localStorage.setItem("id1",data.insertId);

        localStorage.setItem("subcat",this.sub_cat_id+" ");
        localStorage.setItem('amt',this.b_budget+" ");


      }
    );
  }
  onChange(value){
    this.selectedFile=<File>value.target.files[0];
  }

  onCancel()
  {
    this._route.navigate(['cat']);
  }

}
