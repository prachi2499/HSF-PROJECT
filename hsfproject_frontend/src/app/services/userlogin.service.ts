import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { login_class } from '../classes/login_user_class';
import { sendmail_c } from '../classes/sendmail_class';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private loginurl:string="http://localhost:3000/user_login/";
  private signupurl:string="http://localhost:3000/user_signup/";
  private viewuserurl:string="http://localhost:3000/user_viewprofile/";
  private changepwdurl:string="http://localhost:3000/changepwd/";
  private forgetpassurl:string="http://localhost:3000/forgetpass/";

  private forgeturl:string="http://localhost:3000/forget_user/";
  constructor(private _http:HttpClient) { }


  getUserById(item:login_class){
    let body=JSON.stringify(item);
     let h=new HttpHeaders().set('content-type','application/json');
     return this._http.post(this.loginurl,body,{headers:h});
     }

     adduser(item:login_class){

      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('content-type','application/json');
      return this._http.post(this.signupurl,body,{headers:h});
   }

   getUserByemailid(id:string){
    return this._http.get(this.viewuserurl+id);
  }

  forgetpassword(id){
    return this._http.get(this.forgeturl+id);
  }
  updateUser(item:login_class){
    let body=JSON.stringify(item);
   let h=new HttpHeaders().set('content-type','application/json');
    return this._http.put(this.viewuserurl+item.email_id,body,{headers:h});
   }
   updatePwd(item:login_class){
    let body=JSON.stringify(item);
   let h=new HttpHeaders().set('content-type','application/json');
    return this._http.put(this.changepwdurl+item.email_id,body,{headers:h});
   }

   sendmail(item:sendmail_c){

    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('content-type','application/json');
    return this._http.post(this.forgetpassurl,body,{headers:h});
 }
}
