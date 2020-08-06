import { Component, OnInit } from '@angular/core';
import { cat_subcat_c } from '../../../classes/cat_subcat_class';
import { ActivatedRoute, Router } from '@angular/router';
import { SubcatserService } from '../../../services/subcatser.service';
import { CategoryserService } from '../../../services/categoryser.service';
import { subcat_c } from '../../../classes/subcat_class';

@Component({
  selector: 'app-editsubcatadmin',
  templateUrl: './editsubcatadmin.component.html',
  styleUrls: ['./editsubcatadmin.component.css']
})
export class EditsubcatadminComponent implements OnInit {
  subcat_name:string;
  subcat_id:number;
  catname_arr:cat_subcat_c[]=[];
  fkcat_id:number;

  constructor(private _actroute:ActivatedRoute,private _route:Router,private _subcatser:SubcatserService,private _catser:CategoryserService) { }

  ngOnInit() {

    this.subcat_id=this._actroute.snapshot.params['id'];
    this._subcatser.getSubcategoryByid(this.subcat_id).subscribe(
      (data:cat_subcat_c[])=>{
        this.subcat_name=data[0].subcat_name;
        this.fkcat_id=data[0].fkcat_id;
      }
    );
    this._catser.getAllCategory().subscribe(
      (data:any)=>{
        this.catname_arr=data;
      }
    );
  }
  onSaveCategory(){
    this._subcatser.updateSubCategory(new subcat_c(this.subcat_name,this.fkcat_id,this.subcat_id)).subscribe(
      (data:any)=>{

        this._route.navigate(['/subcatadmin']);
      }
    );

  }
  oncancel()
  {
    this._route.navigate(['/subcatadmin']);
  }

}
