import { Component, OnInit } from '@angular/core';
import { subcat_c } from '../classes/subcat_class';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubcatserService } from '../services/subcatser.service';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {
  arrsubcat:subcat_c[]=[];
  fkcat_id:number;
  x:number;
  sub_cat:number;
  constructor(private _acroute:ActivatedRoute,private subcatser:SubcatserService,private _router:Router) { }

  ngOnInit() {

    this._acroute.params.subscribe(
      (y:Params)=>{
        this.x=y['id'];


    console.log(this.x);

    this.subcatser.getSubcategoryByid(this.x).subscribe(

      (data:subcat_c[])=>{

         this.arrsubcat=data;

          }
        );





              }
    );




  }
  onclicksubcat(id){
    this.sub_cat=id;
    console.log('subcatpage'+this.sub_cat);
   this._router.navigate(['hireorcontest',{cat_id:this.x,sub_cat_id:this.sub_cat}]);
  }

}
