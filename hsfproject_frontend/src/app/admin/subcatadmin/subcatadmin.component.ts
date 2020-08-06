import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { subcat_c } from '../../classes/subcat_class';
import { cat_subcat_c } from '../../classes/cat_subcat_class';
import { SubcatserService } from '../../services/subcatser.service';
import { CategoryserService } from '../../services/categoryser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcatadmin',
  templateUrl: './subcatadmin.component.html',
  styleUrls: ['./subcatadmin.component.css']
})
export class SubcatadminComponent implements OnInit {
  subCategoryDataSource= new MatTableDataSource();
  displayedColumns:string[] = ['check','subcat_name','fkcat_id','action'];
  subcatarr:subcat_c[]=[];
  flag:boolean=false;
  subcat_id:number;
  subcat_name:string;
  fkcat_id:number;
  cat_name:string;
  catnamearr:cat_subcat_c[];
  selected_catname:cat_subcat_c;
  cat_id:number;
  delsubcatarr:subcat_c[]=[];
  i:number=0;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _subcatser:SubcatserService,private cat_ser:CategoryserService,private _route:Router) { }

  ngOnInit() {
    this.subCategoryDataSource.sort = this.sort;
    this.subCategoryDataSource.paginator = this.paginator;
    this.getAllSubCategories();
    this.getAllCategories();


    this._subcatser.catsubcat().subscribe(
      (data:any)=>{
        this.subcatarr=data;
        this.subCategoryDataSource.data=this.subcatarr;
      }
    );



  }

  getAllSubCategories(){
    this._subcatser.getAllSubcategory().subscribe(
      (data:any)=>{
        this.subcatarr=data;
        this.subCategoryDataSource.data=this.subcatarr;
      }
    );
  }

  getAllCategories(){
    this.cat_ser.getAllCategory().subscribe(
      (data:any)=>{
        this.catnamearr=data;

      }
    );
  }

  onAddPlusSubCat()
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

  onAddSubCategory(){
    console.log("hello");
    this._subcatser.addSubCategory(new subcat_c(this.subcat_name,this.selected_catname.cat_id)).subscribe(
    (data:any)=>{
        this.catnamearr.push(new cat_subcat_c(this.subcat_name,this.selected_catname.cat_id));
        this.subCategoryDataSource.data=this.subcatarr;
        this.flag=false;
        this.getAllSubCategories();

    }

  );
}

onUpdateSubCategory(item:subcat_c){

  this._route.navigate(['/editsubcatadmin',item.subcat_id]);
}
onDeleteSubCategory(item:subcat_c){
  if(window.confirm('Are you sure you want to delete this subcategory?'))
  {

  this._subcatser.deleteSubCategory(item).subscribe(
    (data:any)=>{
      this.subcatarr.splice(this.subcatarr.indexOf(item),1);
      this.subCategoryDataSource.data=this.subcatarr;
    }
  );
}

}
subCategorycheckchange(item:subcat_c)
{
  if(this.delsubcatarr.find(x=>x==item)){
    this.delsubcatarr.splice(this.delsubcatarr.indexOf(item),1);
  }
  else{
    this.delsubcatarr.push(item);
  }

}
  applyFilter(filterValue: string) {
    this.subCategoryDataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteAllSubCategory(){
    if(window.confirm('Are you sure you want to delete this subcategory?'))
    {
    this._subcatser.deleteAll(this.delsubcatarr).subscribe(
      (x:any)=>{
      for(this.i=0;this.i<this.delsubcatarr.length;this.i++){
        if(this.subcatarr.find(x=>x==this.delsubcatarr[this.i])){
          this.subcatarr.splice(this.subcatarr.indexOf(this.delsubcatarr[this.i]),1);
        }
      }
      this.subCategoryDataSource.data=this.subcatarr;
      this.getAllSubCategories();
    });
}
  }


}
