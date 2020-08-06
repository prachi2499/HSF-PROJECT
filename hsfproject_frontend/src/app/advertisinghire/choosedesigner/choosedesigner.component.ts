import { Component, OnInit } from '@angular/core';
import { AdvertisingServiceService } from '../../services/advertising-service.service';
import { desig_class } from '../../classes/designer_class';
import { user_adv_hire_class } from '../../classes/useradv_class';
import { Router, ActivatedRoute } from '@angular/router';
import { adv_hire_class } from '../../classes/a_hire_class';


@Component({
  selector: 'app-choosedesigner',
  templateUrl: './choosedesigner.component.html',
  styleUrls: ['./choosedesigner.component.css']
})
export class ChoosedesignerComponent implements OnInit {


  designerarr:desig_class[]=[];
  a_id:number;
  a_language:string;
 a_projectname:String;
    a_timeline:String;
  a_price:number;
  fksubcat_id:number;
  fkuser_id:String;
  fkdesigner_id:string;
  useradvarr:user_adv_hire_class[]=[];
  advarr:adv_hire_class[]=[];
  subcat_id:number;
  subcat_name:string;
  x:number;


  constructor(private useradvservice:AdvertisingServiceService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {
    this.fkuser_id=localStorage.getItem("email_id");
    this.a_id=parseInt(localStorage.getItem("id1"));
    // this.x=this._actroute.snapshot.params['id'];
    this.useradvservice.getAdvertisingByid(this.a_id).subscribe(
      (data:user_adv_hire_class[])=>{
        console.log(data);
        this.a_id=data[0].a_id;
        this.a_language=data[0].a_language;
        this.a_projectname=data[0].a_projectname;
        this.a_timeline=data[0].a_timeline;
        this.a_price=data[0].a_price;
         this.fkuser_id=data[0].fkuser_id;
        this.fksubcat_id=data[0].fksubcat_id;


      }
    );

    console.log(this.a_id);
   this.useradvservice.getAllDesigner().subscribe(
    (data:desig_class[])=>{
      this.designerarr=data;
            }

   );


  }
  onaddDesigner(item)
  {
    this.fkdesigner_id=item.email_id;
    this.useradvservice.updateDesigner(new user_adv_hire_class(this.a_id,this.a_language,this.a_projectname,this.a_timeline,this.a_price,this.fkuser_id,item.email_id,this.fksubcat_id)).subscribe(
      (data:any)=>{
        console.log(data);


        this._router.navigate(['/order']);
        console.log('desi'+this.fkdesigner_id);
        localStorage.setItem("dname",this.fkdesigner_id);
      }
    );
  }

  ondetail(item){
    this._router.navigate(['details',item.email_id]);
  }

  onreview(item)
  {
    this._router.navigate(['/review_admin',item.email_id]);
    console.log('review');
  }

}























