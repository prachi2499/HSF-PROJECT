import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvPortfolioServiceService {

  private portfoliourl:string="http://localhost:3000/portfolio/";
  constructor(private _http:HttpClient) { }

  getAllPortfolio(){
    return this._http.get(this.portfoliourl);
  }
  getPortfolioByid(id:string){
    return  this._http.get(this.portfoliourl+id);
  }

}
