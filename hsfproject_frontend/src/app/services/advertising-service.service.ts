import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { adv_hire_class } from '../classes/a_hire_class';
import { user_adv_hire_class } from '../classes/useradv_class';


@Injectable({
  providedIn: 'root'
})
export class AdvertisingServiceService {

  private advertisingurl:string="http://localhost:3000/advertising/";
  private addadvurl:string="http://localhost:3000/addadv/";
  private useradvurl:string="http://localhost:3000/useradv/";
  private designerurl:string="http://localhost:3000/designer/";
  private designerurl1:string="http://localhost:3000/designers/";
  private similardesigner:string="http://localhost:3000/similar/";

  constructor(private _http:HttpClient) { }


  getAllAdvertising(){
    return this._http.get(this.advertisingurl);
  }
  getAllDesigners(){
    return this._http.get(this.designerurl1);
  }
  getUserByadv(){
    return this._http.get(this.useradvurl);
  }
  getAllDesigner(){
    return this._http.get(this.designerurl);
  }
  getAdvertisingByid(id:number){
    return  this._http.get(this.advertisingurl+id);
  }
  addAdvertise(item:user_adv_hire_class){

    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('content-type','application/json');
    return this._http.post(this.addadvurl,body,{headers:h});
     }

  deleteAdvertise(item:user_adv_hire_class){
    let h=new HttpHeaders().set('content-type','application/json');
    return this._http.delete(this.advertisingurl+item.a_id,{headers:h});
    }
    updateAdvertise(item:user_adv_hire_class){

      let body=JSON.stringify(item);
       let h=new HttpHeaders().set('content-type','application/json');
       return this._http.put(this.advertisingurl+item.a_id,body,{headers:h});
       }
       deleteAll(item:user_adv_hire_class[]){
        let body=JSON.stringify(item);
        let h=new HttpHeaders().set('content-type','application/json');
        return this._http.post(this.advertisingurl,body,{headers:h});
         }
         updateDesigner(item:user_adv_hire_class){
          console.log('service update');
          console.log('a id'+item.a_id);
          let aid=item.a_id;
          let body=JSON.stringify(item);
           let h=new HttpHeaders().set('content-type','application/json');
           return this._http.put(this.designerurl+aid,body,{headers:h});
           }
           getSimilarDesignerbyid(did:String){
            return this._http.get(this.similardesigner+did);
          }
}
