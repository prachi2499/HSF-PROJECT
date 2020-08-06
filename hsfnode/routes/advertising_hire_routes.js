var advertising=require('../models/advertising_hire_model');
var express=require('express');
var router=express.Router();


router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    advertising.getAdvertisingByid(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    advertising.getAllAdvertising(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.delete("/:a_id", function(req, res, next) {
    advertising.deleteAdvertise(req.params.a_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.put("/:id", function(req, res, next) {
    advertising.updateAdvertise(req.params.id,req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  

  router.post('',function(req,res,next)
  {
   advertising.deleteAll(req.body,function(err,rows){
          if(err)
          {
              res.json(err);
          }
          else{
              res.json(rows);
          }
          });
  });
 

  module.exports=router;