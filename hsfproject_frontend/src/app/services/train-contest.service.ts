import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tcontest_user_subcat_c } from '../classes/t_user_contest_class';

@Injectable({
  providedIn: 'root'
})
export class TrainContestService {

  trainingcontesturl:string='http://localhost:3000/trainingcontest/';
  trainingcontestbyuser:string='http://localhost:3000/trainingcontestbyuser/';
  contestdesignerurl:string='http://localhost:3000/tcontest_designers/';
  trainingcontestdelmulurl:string='http://localhost:3000/delalltrainingcontest/';
  durationurl:string='http://localhost:3000/duration_train_contest/';
  designerupdateurl:string="http://localhost:3000/train_update_contest/";
  constructor(private _http:HttpClient) { }

  getallTrainingcontest(){
    return this._http.get(this.trainingcontesturl);
  }
  getTrainingcontestByid(t_contest_id:number){
    return this._http.get(this.trainingcontesturl+t_contest_id);
  }
  getTrainingcontestbyUser(){
    return this._http.get(this.trainingcontestbyuser);
  }
  getAllDesigner_trainingcontest(){
    return this._http.get(this.contestdesignerurl);
  }
  addTrainingcontest(item:tcontest_user_subcat_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.trainingcontesturl,body,{headers:head1});
  }
  updatetrainingcontest(item:tcontest_user_subcat_c){
    let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('content-type','application/json');
     return this._http.put(this.trainingcontesturl+item.t_contest_id,body,{headers:head1});
     }

  deleteTrainingcontest(item:tcontest_user_subcat_c){
    let head1=new HttpHeaders().set('Content-Type','application/json');

  return this._http.delete(this.trainingcontesturl+item.t_contest_id,{headers:head1});
  }
  deleteMultiple(item:tcontest_user_subcat_c[]){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.post(this.trainingcontestdelmulurl,body,{headers:head1});
  }
  updateduration(item:tcontest_user_subcat_c){
    let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('content-type','application/json');
     return this._http.put(this.durationurl+item.t_contest_id,body,{headers:head1});
     }

     updateDesigner(item:tcontest_user_subcat_c){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.designerupdateurl+item.t_contest_id,body,{headers:head1});
  }


}
