var useradv=require('../models/user_adv_model');
var express=require('express');
var router=express.Router();

router.get("/", function(req, res, next) {
    
      useradv.getUserByadv(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    
  });


 

  module.exports=router;