import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { category_c } from '../../classes/category_class';
import { CategoryserService } from '../../services/categoryser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryadmin',
  templateUrl: './categoryadmin.component.html',
  styleUrls: ['./categoryadmin.component.css']
})
export class CategoryadminComponent implements OnInit {
  categoryDataSource= new MatTableDataSource();
  displayedColumns:string[] = ['check','cat_name','action'];
  catarr:category_c[]=[];
  flag:boolean=false;
  cat_name:string;
  cat_id:number;
  fkcat_id:number;
  delarr:category_c[]=[];
  i:number=0;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _catser:CategoryserService,private _route:Router) { }

  ngOnInit() {
    this.categoryDataSource.sort=this.sort;
    this.getAllCategories();
  }
  getAllCategories(){
    this._catser.getAllCategory().subscribe(
      (data:any)=>{
        this.catarr=data;
        this.categoryDataSource.data=this.catarr;
      }
    );
  }
    applyFilter(filterValue: string) {
      this.categoryDataSource.filter = filterValue.trim().toLowerCase();
    }

    onUpdateCategory(item:category_c)
    {
      this._route.navigate(['/editcatadmin',item.cat_id]);
    }
    onDeleteCategory(item:category_c)
    {
      if(window.confirm('Are you sure you want to delete this category?This will also delete all the subcategories of this category ?'))
      {
        localStorage.setItem('cat_id',item.cat_id+"");
        this._catser.deleteCategory(item).subscribe(
          (data:any)=>{
            this.catarr.splice(this.catarr.indexOf(item),1);
            this.categoryDataSource.data=this.catarr;
            this.fkcat_id=parseInt(localStorage.getItem('cat_id'));
            console.log(this.fkcat_id);
            this._catser.delSubcatbyCat(this.fkcat_id).subscribe(
              (data:any)=>{

              }
            );

          }
        );
      }

    }

    onAddplus()
    {
      if(this.flag)
      {
        this.flag=false;

      }
      else
      {
        this.flag=true;
      }
    }

    onAddCategory(){
      // if(window.confirm("Category name is required"))
      // {
      //   this.flag=true;
      // }

        this._catser.addCategory(new category_c(this.cat_id,this.cat_name)).subscribe(
        (data:category_c[])=>{
          if(this.cat_name=="")
          {
            //this.flag=false;

            this.getAllCategories();
          }
          else
          {
            this.catarr.push(new category_c(this.cat_id,this.cat_name));
            this.categoryDataSource.data=this.catarr;
             this.flag=false;
            this.getAllCategories();
          }
        }
      );
    }

    categorycheckchange(item:category_c){
      if(this.delarr.find(x=>x==item)){
        this.delarr.splice(this.delarr.indexOf(item),1);
      }
      else{
        this.delarr.push(item);
      }
  }

  onDeleteAllCategory(){
    if(window.confirm('Are you sure you want to delete this category? This will also delete all the subcategories of this category ?'))
      {

      this._catser.deleteAll(this.delarr).subscribe(
        (x:any)=>{
        for(this.i=0;this.i<this.delarr.length;this.i++){
          if(this.catarr.find(x=>x==this.delarr[this.i])){
            this.catarr.splice(this.catarr.indexOf(this.delarr[this.i]),1);
          }
        }
        this.categoryDataSource.data=this.catarr;
        this.getAllCategories();
      });
      }

  }

}
