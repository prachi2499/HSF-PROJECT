import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandingHireService } from '../../../services/branding-hire.service';
import { user_b_hire_class } from '../../../classes/branding_user_class';

@Component({
  selector: 'app-editbrandingadmin',
  templateUrl: './editbrandingadmin.component.html',
  styleUrls: ['./editbrandingadmin.component.css']
})
export class EditbrandingadminComponent implements OnInit {
  b_id:number;
  b_language:string;
  b_subject:string;
  b_design:string;
  b_description:string;
  b_timeline:string;
  b_budget:number;
  b_link:string;
  b_image:string;
  x:number;
  flag:boolean=false;
  selectedFile:File=null;
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
  constructor(private route:Router,private actroute:ActivatedRoute,private brand_ser:BrandingHireService) { }

  ngOnInit() {
    this.x=this.actroute.snapshot.params['id'];
    this.brand_ser.getBrandingById(this.x).subscribe(
      (data:user_b_hire_class[])=>{

        this.b_id=data[0].b_id;
        this.b_language=data[0].b_language;
        this.b_subject=data[0].b_subject;
        this.b_design=data[0].b_design;
        this.b_description=data[0].b_description;
        this.b_timeline=data[0].b_timeline;
        this.b_budget=data[0].b_budget;
        this.b_link=data[0].b_link;
        console.log(this.b_link);
        this.b_image=data[0].b_image;
    }
    );
  }
  onChangeImage(value){
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }
  onSave(){
    if(this.flag)
    {
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

      this.brand_ser.updateImage(fd).subscribe(
        (data:any)=>{

        this.route.navigate(['/brand_hire_admin']);
        console.log(data);
      }
      );
    }
    else
    {

      this.brand_ser.updateBranding(new user_b_hire_class(this.b_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_timeline,this.b_budget,this.b_link,this.b_image)).subscribe(
      (data:any)=>{

       this.route.navigate(['/brand_hire_admin']);
       console.log(data);
    }
    );
  }


  }
}
