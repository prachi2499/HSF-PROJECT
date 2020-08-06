import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthguardService {

  constructor(private _route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(localStorage.getItem('email_id')=="")
    {
      alert("page not found");
      this._route.navigate(['not-found']);

    }
    else
    {
      return true;
    }

  }
}
