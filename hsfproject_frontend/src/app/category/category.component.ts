import { Component, OnInit } from '@angular/core';
import { category_c } from '../classes/category_class';
import { CategoryserService } from '../services/categoryser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  arrcat:category_c[]=[];
  cat_id:number;
  cat_name:string;
  constructor(private _catser:CategoryserService,private _router:Router) { }

  ngOnInit() {


    this._catser.getAllCategory().subscribe(
      (data:category_c[])=>{
        this.arrcat=data;

      }
    );
  }

  onclick(item){
    this._router.navigate(['subcat',item.cat_id]);
  }

}
