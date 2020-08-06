import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkgallService {
  private workgallurl:string="http://localhost:3000/workgall/";
  private brandworkgallurl:string="http://localhost:3000/brandworkgall/";
  private viewalldesigurl:string="http://localhost:3000/viewalldesig/";
  constructor(private _http:HttpClient) { }

  getallwork(){
    return this._http.get(this.workgallurl);
  }
  getallbrandwork(){
    return this._http.get(this.brandworkgallurl);
  }

  getWorkByID(id:number){
    return this._http.get(this.workgallurl+id);
  }

  getalldesigname(){
    return this._http.get(this.viewalldesigurl);
  }


}
