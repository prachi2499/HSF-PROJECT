import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user_b_contest_class } from '../classes/user_b_contest_class';
import { BrandContestService } from '../services/brand-contest.service';

@Component({
  selector: 'app-designermenu',
  templateUrl: './designermenu.component.html',
  styleUrls: ['./designermenu.component.css']
})
export class DesignermenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    cnt:number=0;
    flag:number=0;
    //i:number=0;
    b_contest_id:number;
    arr:user_b_contest_class[];
  constructor(private breakpointObserver: BreakpointObserver,private ser:BrandContestService) {}
  ngOnInit(){
    this.getAllData();
  }

  getAllData()
  {
    this.b_contest_id=parseInt(localStorage.getItem("id1"));
    console.log("b_id :"+this.b_contest_id);
    this.ser.getBrandingById(this.b_contest_id).subscribe(
      (data:user_b_contest_class[])=>{
        console.log(data);
       this.arr=data;

       for(let i=0;i<this.arr.length;i++)
      {
        if(this.arr==null)
        {
            this.flag=1;
            break;
        }
      }
    if(this.flag==0)
    {
      this.cnt=parseInt(localStorage.getItem('count'));
      console.log("COUNT as  : "+this.cnt);
    }
    else{
      this.flag=1;
    }
      }


    );
  }
  }
