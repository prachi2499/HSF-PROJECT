import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { review_c } from '../classes/review_class';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewurl:string='http://localhost:3000/review/';
  userreviewurl:string='http://localhost:3000/userreview/';
  user:string="http://localhost:3000/user_login/";
  reviewbyuser:string="http://localhost:3000/reviewbyuser/";
  constructor(private _http:HttpClient) { }


  getAllReview(){
    return this._http.get(this.reviewurl);
  }
  getReviewByid(id:string){
    return this._http.get(this.reviewurl+id);
  }
  getUserById(id:string)
  {
    return this._http.get(this.user+id);
  }
  getAllReviewbyuser(id:string){
    return this._http.get(this.reviewbyuser+id);
  }

  addreviews(item:review_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.reviewurl,body,{headers:head1});
  }
}
