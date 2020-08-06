var photo=require('../models/pastorder_model');
var express = require('express');
var router = express.Router();


router.get("/:id", function(req,res,next) {
    console.log(req.params.id);
      photo.getphoto(req.params.id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    
  });

  module.exports=router;