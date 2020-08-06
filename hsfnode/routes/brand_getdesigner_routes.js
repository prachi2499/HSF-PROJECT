var designers=require('../models/brand_designer_model');
var express = require('express');
var router = express.Router();


router.get("/", function(req, res, next) {
designers.getAllDesigner(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
});
});

router.put("/:id",function(req,res,next){
    designers.updatedesigners(req.params.id,req.body,function(err,rows){
       if(err){
         res.json(err);
       }
       else{
         res.json(rows);
       }
     });
});

module.exports=router;

