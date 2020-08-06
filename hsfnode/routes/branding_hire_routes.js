var branding=require('../models/b_hire_model');
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
  



  router.get("/:id?", function(req, res, next) {
    if(req.params.id){
        branding.getBrandingById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
    else
    {
        branding.getAllBranding(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
    });

 router.delete("/:id?", function(req, res, next) {
        branding.deleteBrandingById(req.params.id, function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });

  router.post("/",upload.single('Image'), function(req, res, next) {
       branding.addBranding(req.body,req.file.filename, function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
 router.put("/:id",function(req,res,next){
       branding.updateBranding(req.params.id,req.body,function(err,rows){
          if(err){
            res.json(err);
          }
          else{
            res.json(rows);
          }
        });
      });
  
    
module.exports=router;
