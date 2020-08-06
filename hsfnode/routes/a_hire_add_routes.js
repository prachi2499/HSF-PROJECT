var addadv_hire=require('../models/a_hire_add_model');
var express=require('express');
var router=express.Router();


router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    addadv_hire.getAdvertisingByid(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    addadv_hire.getAllAdvertising(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});



  router.post('/',function(req,res,next)
  {
   addadv_hire.addAdvertise(req.body,function(err,rows){
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