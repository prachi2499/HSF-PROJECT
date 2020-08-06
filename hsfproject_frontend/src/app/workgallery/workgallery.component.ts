import { Component, OnInit } from '@angular/core';
import { category_c } from '../classes/category_class';
import { CategoryserService } from '../services/categoryser.service';
import { WorkgallService } from '../services/workgall.service';
import { workgal_c } from '../classes/workgal_class';


@Component({
  selector: 'app-workgallery',
  templateUrl: './workgallery.component.html',
  styleUrls: ['./workgallery.component.css']
})
export class WorkgalleryComponent implements OnInit {

  constructor(private _abc:WorkgallService) { }
arr:workgal_c[]=[];
barr:workgal_c[]=[];
  ngOnInit() {

    this._abc.getallwork().subscribe(
      (data:workgal_c[])=>{
        this.arr=data;
      }
    );



      }

    onclickbrand()
    {
      this._abc.getallbrandwork().subscribe(
        (data:workgal_c[])=>{
          this.barr=data;
          console.log(this.barr);
        }
      );
    }
}
