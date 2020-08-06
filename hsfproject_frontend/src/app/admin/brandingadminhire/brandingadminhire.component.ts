import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { user_b_hire_class } from '../../classes/branding_user_class';
import { Router } from '@angular/router';
import { BrandhireorcontestComponent } from './brandhireorcontest/brandhireorcontest.component';
import { BrandingHireService } from '../../services/branding-hire.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-brandingadminhire',
  templateUrl: './brandingadminhire.component.html',
  styleUrls: ['./brandingadminhire.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BrandingadminhireComponent implements OnInit {

  user_branding_arr:user_b_hire_class[]=[];
  designers:string[]=[];
  dataSource=new MatTableDataSource();
  name:string;
  i:number=0;
  b_id:number;
  expandedElement=this.dataSource;
  dname:string="";


  displayedColumns: string[] = ['Action','b_description','fksubcat_id','fkuser_id','fkdesigner_id','b_budget','b_image','symbol'];
  constructor(private route:Router,private brand_Ser:BrandingHireService) { }

  ngOnInit() {
    this.brand_Ser.getUserByBranding().subscribe(
      (data:any[])=>{
        console.log(data);
        this.user_branding_arr=data;
        this.dataSource.data=this.user_branding_arr;

      // this.brand_Ser.getallDesignersbyid(this.b_id).subscribe(
      //     (data:any)=>{
      //       this.designers=data;

      //       for(let i=0;i<this.designers.length;i++)
      //       {
      //           this.user_branding_arr[i].fkdesigner_id=this.designers[i];
      //       }
      //       this.dataSource.data=this.user_branding_arr;
      //     }
      //   );





      }
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OnAdd()
  {
    this.route.navigate(['/add_branding_admin']);
  }

  onDeleteBranding(item:user_b_hire_class){
    this.brand_Ser.deleteBrandingById(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.user_branding_arr.splice(this.user_branding_arr.indexOf(item),1);
        this.dataSource.data=this.user_branding_arr;
      }
    );
  }

  onEditBranding(item:user_b_hire_class){
    this.route.navigate(["/editbrand_admin", item.b_id]);
  }
}
