import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { t_user_subcat_class } from '../classes/t_usersubcat_class';

@Injectable({
  providedIn: 'root'
})
export class TrainingHireService {


  trainingurl:string='http://localhost:3000/training/';
  trainingdelmulurl:string='http://localhost:3000/delall_training/';
  t_designersurl:string='http://localhost:3000/t_designers/';
  trainingbyuserurl:string='http://localhost:3000/t_byuser/';
  t_getdesignersurl:string='http://localhost:3000/t_getdesigner/';
  constructor(private _http:HttpClient) { }


  getTrainingByid(t_id:number){
    return this._http.get(this.trainingurl+t_id);
  }
  getAllDesigner_training(){
    return this._http.get(this.t_designersurl);
  }
  chooseDesigners(){
    return this._http.get(this.t_getdesignersurl);
  }
  getTrainingbyUser(){
    return this._http.get(this.trainingbyuserurl);
  }
  getallTraining(){
    return this._http.get(this.trainingurl);
  }
  addTraining(item:t_user_subcat_class){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.trainingurl,body,{headers:head1});
  }
  deleteTraining(item:t_user_subcat_class){
    let head1=new HttpHeaders().set('Content-Type','application/json');

  return this._http.delete(this.trainingurl+item.t_id,{headers:head1});
  }
  deleteMultiple(item:t_user_subcat_class[]){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.post(this.trainingdelmulurl,body,{headers:head1});
  }
  updatetraining(item:t_user_subcat_class){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.put(this.trainingurl+item.t_id,body,{headers:head1});
  }
  updateDesigner_training(item:t_user_subcat_class){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
  return this._http.put(this.t_getdesignersurl+item.t_id,body,{headers:head1});
  }
}
