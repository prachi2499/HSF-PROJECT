var branding=require('../models/branding_contest_model');
var express = require('express');
var router = express.Router();

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

      router.post('/',function(req,res,next){
        branding.addBranding(req.body,function(err,rows){
            if(err){
                res.json(err);
    
            }
            else{
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
