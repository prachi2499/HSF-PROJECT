import { Component, OnInit } from '@angular/core';
import { desig_class } from '../../../classes/designer_class';
import { user_b_hire_class } from '../../../classes/branding_user_class';
import { BrandingHireService } from '../../../services/branding-hire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choosedesigner-brand-admin',
  templateUrl: './choosedesigner-brand-admin.component.html',
  styleUrls: ['./choosedesigner-brand-admin.component.css']
})
export class ChoosedesignerBrandAdminComponent implements OnInit {
  designerarr:desig_class[]=[];
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
  fkuser_id:string;
  fkdesigner_id:string="";
  user_b_arr:user_b_hire_class[]=[];
  subcat_id:number;
  subcat_name:string;
  x:number;

  constructor(private brand_ser:BrandingHireService,private route:Router) { }

  ngOnInit() {
    this.fkuser_id=localStorage.getItem("email_id");
    this.b_id=parseInt(localStorage.getItem("id1"));
    // this.x=this._actroute.snapshot.params['id'];
    this.brand_ser.getBrandingById(this.b_id).subscribe(
      (data:user_b_hire_class[])=>{
        console.log(data);

        // this.fkuser_id=data[0].fkuser_id;

        this.b_id=data[0].b_id;
        this.b_language=data[0].b_language;
        this.b_subject=data[0].b_subject;
        this.b_design=data[0].b_design;
        this.b_description=data[0].b_description;
        this.b_timeline=data[0].b_timeline;
        this.b_budget=data[0].b_budget;
        this.b_link=data[0].b_link;
        this.b_image=data[0].b_image;
        this.fksubcat_id=data[0].fksubcat_id;



      }
    );

    this.brand_ser.getallDesigner().subscribe(

      (data:desig_class[])=>
      {
          this.designerarr=data;
      }
    );
  }
  onaddDesigner(item)
  {
    this.fkdesigner_id=item.email_id;
    this.brand_ser.updateDesigner(new user_b_hire_class(this.b_id,this.b_language,this.b_subject,this.b_design,this.b_description,this.b_timeline,this.b_budget,this.b_link,this.b_image,this.fkuser_id,item.email_id,this.fksubcat_id)).subscribe(
      (data:any)=>{
        console.log(data);

        this.route.navigate(['/order']);

        localStorage.setItem('dname',this.fkdesigner_id);
      }
    );
  }

  ondetail(item)
  {
    this.route.navigate(['details',item.email_id]);
  }
  onreview(item)
  {
    this.route.navigate(['/review_admin',item.email_id]);
    console.log('review');
  }
}
