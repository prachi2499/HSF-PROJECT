import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { order_c } from '../classes/order_class';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  private orderurl:string="http://localhost:3000/orderdetail/";

  private designer_url:string="http://localhost:3000/order_designer_name/";
  private subcat_url:string="http://localhost:3000/order_subcat_name/";
  private ordertopfive_url:string="http://localhost:3000/orderfive/";
  private order_url:string="http://localhost:3000/pastorder/";
  private order_name_url:string="http://localhost:3000/pastordername/";
  private photo_url:string="http://localhost:3000/photo/";
  constructor(private _http:HttpClient) { }


   getUserByorder(){
    return this._http.get(this.orderurl);
  }
  // getUserByid(id:string){
  //   return this._http.get(this.orderurl+id);
  // }

  addOrder(item:order_c){

    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('content-type','application/json');
    return this._http.post(this.orderurl,body,{headers:h});
     }
     getUserByName(id:string){
       console.log('service'+id);
      return this._http.get(this.designer_url+id);
     }
     getSubcatByName(id:number){

     return this._http.get(this.subcat_url+id);
    }
    gettopfiveorder(){
      return this._http.get(this.ordertopfive_url);
}
getpastOrder(id)
  {
      return this._http.get(this.order_url+id);
  }
  getpastOrdername(id)
  {
      return this._http.get(this.order_name_url+id);
  }
  getphoto(id)
  {
      return this._http.get(this.photo_url+id);
  }


}
