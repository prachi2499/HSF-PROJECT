import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user_b_contest_class } from '../classes/user_b_contest_class';

@Injectable({
  providedIn: 'root'
})
export class BrandContestService {
  private branding_url:string="http://localhost:3000/brandingcontest/";
  private designer_url:string="http://localhost:3000/designerscontest/";
  private user_url:string="http://localhost:3000/brandingContestUser/";
  private duration_url:string="http://localhost:3000/b_duration_contest/";


  private uploadimg_url:string="http://localhost:3000/uploadimg_contest/";
  private Image_url:string="http://localhost:3000/Image_contest/";
  private dname_url:string="http://localhost:3000/dname_contest/";
  private des_name_url:string="http://localhost:3000/dname_contest_ma/";
  constructor(private _http:HttpClient) { }


  getallBranding(){
    return this._http.get(this.branding_url);
  }

  getBrandingById(id){
    return this._http.get(this.branding_url+id);
  }

  getallDesigners(){
    return this._http.get(this.designer_url);
  }

  getUserByBranding(){
    return this._http.get(this.user_url);
  }


  addBranding(item:user_b_contest_class){
    return this._http.post(this.branding_url,item);
  }

  deleteProductById(item:user_b_contest_class){
    let h=new HttpHeaders().set('content-type','application/json');
    return this._http.delete(this.branding_url+item.b_contest_id,{headers:h});
   }

   updateDuration(item:user_b_contest_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.duration_url+item.b_contest_id,body,{headers:head1});
  }
  updateDesigner(item:user_b_contest_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.dname_url+item.b_contest_id,body,{headers:head1});
}




  addImage(item:FormData){
    return this._http.post(this.uploadimg_url,item);
  }


  getImageById(id:number,u_id:string){
    return this._http.get(this.Image_url+id+"/"+u_id);
  }
  getalldesigname_contest(id){
    return this._http.get(this.des_name_url+id);
  }

}
