import { Component, OnInit } from '@angular/core';
import { uploadclass } from '../../classes/d_upload_class';
import { BrandContestService } from '../../services/brand-contest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designer-upload-img',
  templateUrl: './designer-upload-img.component.html',
  styleUrls: ['./designer-upload-img.component.css']
})
export class DesignerUploadImgComponent implements OnInit {

  dc_id:number;
  fkdesigner_id:string;
  fkcontest_id:number;
  upload_arr:uploadclass[]=[];
  selectedFile:File=null;
  Image:string;
  constructor(private _serv:BrandContestService,private _route:Router) { }

  ngOnInit() {
  }

  OnAdd(){

    this.fkcontest_id=parseInt(localStorage.getItem("id1"));
    this.fkdesigner_id=localStorage.getItem('email_id');
    const fd=new FormData;
    fd.append('dc_id',this.dc_id+"");
    fd.append('Image',this.selectedFile,this.selectedFile.name);
    fd.append('fkcontest_id',this.fkcontest_id+"");
    fd.append('fkdesigner_id',this.fkdesigner_id+"");




    this._serv.addImage(fd).subscribe(
      (data:any)=>{
        console.log(data);
        this.upload_arr.push(new uploadclass(this.dc_id,this.Image,this.fkcontest_id,this.fkdesigner_id));
        localStorage.setItem('fkcontest_id',this.fkcontest_id+"");
        localStorage.setItem('d_id',this.fkdesigner_id);
        alert("added");

        this._route.navigate(['']);


       // alert("added");
       // console.log(this.branding_arr);
      }
    );



  }
  onChange(value){
    this.selectedFile=<File>value.target.files[0];
  }
}
