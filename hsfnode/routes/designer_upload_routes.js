var uploadimg=require('../models/designer_upload_contest_model');
var express = require('express');
var router = express.Router();
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
  x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
  cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
  });
  var upload = multer({storage: storage});
  

  router.get('/',function(req,res,next){

    uploadimg.getAllImages(function(err,rows){
      if(err)
      {
      res.json(err);
      }
      else{
      res.json(rows);
      }
      });
     });

  router.post("/",upload.single('Image'), function(req, res, next) {
        uploadimg.addImage(req.body,req.file.filename, function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
  
    
module.exports=router;
