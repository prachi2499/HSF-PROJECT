import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { AdvertisingServiceService } from '../services/advertising-service.service';
import { adv_hire_class } from '../classes/a_hire_class';
import { Router } from '@angular/router';
import { user_adv_hire_class } from '../classes/useradv_class';
import {animate, state, style, transition, trigger} from '@angular/animations';




@Component({
  selector: 'app-advertisinghire',
  templateUrl: './advertisinghire.component.html',
  styleUrls: ['./advertisinghire.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
   ],
})
export class AdvertisinghireComponent implements OnInit {

  arrAdv:adv_hire_class[]=[];
  a_id:number;
   a_language:string;
  a_projectname:String;
     a_timeline:String;
   a_price:number;
 fkuser_id:string;
   fkdesigner_id:string;
   fksubcat_id:number;
   i:number=0;
   delarr:user_adv_hire_class[]=[];
   useradvarr:user_adv_hire_class[]=[];
   name:string;
   email_id:string;





  dataSource=new MatTableDataSource();
designers:string[];

  displayedColumns: string[] = ['act','fksubcat_id','fkuser_id','fkdesigner_id','a_price','action'];
  expandedElement=this.dataSource;
  constructor(private _advservice:AdvertisingServiceService,private _route:Router) { }

  ngOnInit() {
    this._advservice.getUserByadv().subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.useradvarr=data;
        this.dataSource.data=this.useradvarr;



        // this._advservice.getAllDesigners().subscribe(
        //   (data:any)=>{
        //     this.designers=data;

        //     for(let i=0;i<this.designers.length;i++){
        //       this.useradvarr[i].fkdesigner_id=this.designers[i];
        //     }

        //     this.dataSource.data=this.useradvarr;
        //   }
        // );
      }
    );

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkchange(item:user_adv_hire_class)
  {
   if(this.delarr.find(x=>x==item))
   {
    this.delarr.splice(this.delarr.indexOf(item),1);

   }
   else{
     this.delarr.push(item);
   }
   console.log(this.delarr);
  }

  ondeleteitem()
  {
    if(window.confirm('Are you sure you want to delete this item?'))
    {
     this._advservice.deleteAll(this.delarr).subscribe(
       (x:any)=>{
         for(this.i=0;this.i<this.delarr.length;this.i++)
         {
           if(this.useradvarr.find(x=>x==this.delarr[this.i]))
           {
             this.useradvarr.splice(this.useradvarr.indexOf(this.delarr[this.i]),1);
           }
         }
         this.dataSource.data=this.useradvarr;
       }
     );
  }
}


  onDelete(item:user_adv_hire_class){
    if(window.confirm('Are you sure you want to delete this item?'))
    {
    this._advservice.deleteAdvertise(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.useradvarr.splice(this.useradvarr.indexOf(item),1);
        this.dataSource.data=this.useradvarr;
      }
    );
  }

  }
  onupdate(item)
  {
    this._route.navigate(['/editadv_hire',item.a_id]);
  }
  onadd()
  {
    this._route.navigate(['/add_advertise']);
  }

}
