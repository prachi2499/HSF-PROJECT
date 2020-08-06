import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { category_c } from '../classes/category_class';


@Injectable({
  providedIn: 'root'
})
export class CategoryserService {

  private caturl:string="http://localhost:3000/category/";
  private delallcaturl:string="http://localhost:3000/catdelall/";
  private delsubcatbycaturl:string="http://localhost:3000/delsubcatbycat/";

  constructor(private _http:HttpClient) { }


  getAllCategory(){
    return this._http.get(this.caturl);
  }
  getCategoryByid(id:number){
    return  this._http.get(this.caturl+id);
  }
  addCategory(item:category_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.post(this.caturl,body,{headers:head1});
  }
  updateCategory(item:category_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.put(this.caturl+item.cat_id,body,{headers:head1});
  }
  deleteCategory(item:category_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');

  return this._http.delete(this.caturl+item.cat_id,{headers:head1});
  }
  delSubcatbyCat(fkcat_id)
  {
    return this._http.delete(this.delsubcatbycaturl+fkcat_id);
  }
  deleteAll(item:category_c[]){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.post(this.delallcaturl,body,{headers:head1});
  }
}
