import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { subcat_c } from '../classes/subcat_class';

@Injectable({
  providedIn: 'root'
})
export class SubcatserService {

  private subcaturl:string="http://localhost:3000/subcategory/";
  private delsubcaturl:string="http://localhost:3000/subcatdelall/";
  private catsubcaturl:string="http://localhost:3000/catsubcat/";
  constructor(private _http:HttpClient) { }


  getAllSubcategory(){
    return this._http.get(this.subcaturl);
  }
  getSubcategoryByid(id:number){
    return  this._http.get(this.subcaturl+id);
  }
  addSubCategory(item:subcat_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.subcaturl,body,{headers:head1});
  }

  deleteSubCategory(item:subcat_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');

  return this._http.delete(this.subcaturl+item.subcat_id,{headers:head1});
  }


  deleteAll(item:subcat_c[]){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.post(this.delsubcaturl,body,{headers:head1});
  }
  updateSubCategory(item:subcat_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.put(this.subcaturl+item.subcat_id,body,{headers:head1});
  }
  catsubcat()
  {

      return this._http.get(this.catsubcaturl);

  }

}
