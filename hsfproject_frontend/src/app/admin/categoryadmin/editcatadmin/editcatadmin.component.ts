import { Component, OnInit } from '@angular/core';
import { category_c } from '../../../classes/category_class';
import { CategoryserService } from '../../../services/categoryser.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcatadmin',
  templateUrl: './editcatadmin.component.html',
  styleUrls: ['./editcatadmin.component.css']
})
export class EditcatadminComponent implements OnInit {

  cat_name:string;
  cat_id:number;
  catarr:category_c[]=[];
  constructor(private _catser:CategoryserService,private _route:Router,private _actroute:ActivatedRoute) { }

  ngOnInit() {

    this.cat_id=this._actroute.snapshot.params['id'];
    this._catser.getCategoryByid(this.cat_id).subscribe(
      (data:category_c[])=>{
        this.cat_name=data[0].cat_name;
      }
    );
  }

  onSaveCategory()
  {
    this._catser.updateCategory(new category_c(this.cat_id,this.cat_name)).subscribe(
      (data:any)=>{
        this._route.navigate(['/catadmin']);
      }
    );
  }
  oncancel()
  {
    this._route.navigate(['/catadmin']);
  }

}
