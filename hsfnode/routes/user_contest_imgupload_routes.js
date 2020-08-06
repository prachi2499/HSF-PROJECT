var img=require('../models/branding_contest_model');
var express = require('express');
var router = express.Router();


router.get("/:id/:u_id", function(req,res,next) {
    console.log(req.params.id);
      img.getImageById(req.params.id,req.params.u_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    
  });
module.exports=router;
