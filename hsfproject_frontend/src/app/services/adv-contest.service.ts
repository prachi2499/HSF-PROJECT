import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user_adv_contest_c } from '../classes/user_adv_contest_class';

@Injectable({
  providedIn: 'root'
})
export class AdvContestService {
  advcontesturl:string='http://localhost:3000/advertisingcontest/';
  advcontestbyuser:string='http://localhost:3000/advcontestbyuser/';
  contestdesignerurl:string='http://localhost:3000/advcontest_desigers/';
  durationurl:string='http://localhost:3000/adv_duration_contest/';
  delallurl:string='http://localhost:3000/adv_delall_contest/';
  updatedesadvurl:string='http://localhost:3000/adv_update_contest/';

  constructor(private _http:HttpClient) { }
  getallAdvertisingcontest(){
    return this._http.get(this.advcontesturl);
  }
  getAdvertisingcontestByid(a_contest_id:number){
    return this._http.get(this.advcontesturl+a_contest_id);
  }
  getAdvertisecontestbyUser(){
    return this._http.get(this.advcontestbyuser);
  }
  getAllDesigner_advertisecontest(){
    return this._http.get(this.contestdesignerurl);
  }
  addcontest(item:user_adv_contest_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.advcontesturl,body,{headers:head1});
  }
  updateAdvertisingcontest(item:user_adv_contest_c){
    let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('content-type','application/json');
     return this._http.put(this.advcontesturl+item.a_contest_id,body,{headers:head1});
     }
  deleteAdvertisingcontest(item:user_adv_contest_c){
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.advcontesturl+item.a_contest_id,{headers:head1});
    }
    updateduration(item:user_adv_contest_c){
      let body=JSON.stringify(item);
       let head1=new HttpHeaders().set('content-type','application/json');
       return this._http.put(this.durationurl+item.a_contest_id,body,{headers:head1});
       }
       deleteAll(item:user_adv_contest_c[]){
        let body=JSON.stringify(item);
        let h=new HttpHeaders().set('content-type','application/json');
        return this._http.post(this.delallurl,body,{headers:h});
         }

         updateDesigner(item:user_adv_contest_c){
          let body=JSON.stringify(item);
          let head1=new HttpHeaders().set('Content-Type','application/json');
          return this._http.put(this.updatedesadvurl+item.a_contest_id,body,{headers:head1});
      }

}
