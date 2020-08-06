import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { user_b_hire_class } from '../classes/branding_user_class';

@Injectable({
  providedIn: 'root'
})
export class BrandingHireService {

  private branding_url:string="http://localhost:3000/branding/";
  private designer_url:string="http://localhost:3000/brand_designers/";
  private user_url:string="http://localhost:3000/brand_user/";
  private getdesigner_url:string="http://localhost:3000/brandgetdesigners/";
  private img_url:string="http://localhost:3000/brand_img/";

  constructor(private _http:HttpClient) { }

  getallBranding(){
    return this._http.get(this.branding_url);
  }
  getUserByBranding(){
    return this._http.get(this.user_url);
  }
   getallDesignersbyid(id){
     return this._http.get(this.designer_url+id);
  }

  getallDesigner(){
    return this._http.get(this.getdesigner_url);
  }


   getBrandingById(id){
     return this._http.get(this.branding_url+id);
  }

  deleteBrandingById(item:user_b_hire_class){
    let h=new HttpHeaders().set('content-type','application/json');
    return this._http.delete(this.branding_url+item.b_id,{headers:h});
    }

  addBranding(item:FormData){
      return this._http.post(this.branding_url,item);
  }

  updateBranding(item:user_b_hire_class){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.branding_url+item.b_id,body,{headers:head1});
  }

  updateDesigner(item:user_b_hire_class){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.getdesigner_url+item.b_id,body,{headers:head1});
  }

  updateImage(item:FormData)
  {
    return this._http.put(this.img_url,item);
  }
}
