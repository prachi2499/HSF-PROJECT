import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { user_b_hire_class } from '../../../classes/branding_user_class';
import { cat_subcat_c } from '../../../classes/cat_subcat_class';
import { BrandingHireService } from '../../../services/branding-hire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SubcatserService } from '../../../services/subcatser.service';

@Component({
  selector: 'app-hirebrandingpageadmin',
  templateUrl: './hirebrandingpageadmin.component.html',
  styleUrls: ['./hirebrandingpageadmin.component.css']
})
export class HirebrandingpageadminComponent implements OnInit {
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
  sub_catnamearr:cat_subcat_c[];
  selected_subcat:cat_subcat_c;
  arrlanguage:string[]=[
    "English",
    "Gujarati",
    "Hindi",
    "Marathi",
    "Telegu"
  ];
  arrtimeline:string[]=[
    '48 hours',
    '1 week',
    '2 weeks',
    '1 month'
  ];
  constructor(private brand_Ser:BrandingHireService,private subcat_ser:SubcatserService,private route:Router,private actroute:ActivatedRoute) { }

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

  OnAdd(){

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
    fd.append('fksubcat_id',this.fksubcat_id+"");

    this.brand_Ser.addBranding(fd).subscribe(
      (data:any)=>{
        console.log(data);
        this.branding_arr.push(new user_b_hire_class(this.b_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_timeline,this.b_budget,this.b_link,this.Image,this.fkuser_id,"",this.fksubcat_id));
        console.log(this.subcat_id);
        this.route.navigate(['/choosedesigner_brand']);
        localStorage.setItem("id1",data.insertId);

        localStorage.setItem("subcat",this.fksubcat_id+" ");
        localStorage.setItem('amt',this.b_budget+" ");
        // alert("added");
       // console.log(this.branding_arr);

      }
    );
  }
  onChange(value){
    this.selectedFile=<File>value.target.files[0];
  }



}
