var designer=require('../models/train_contest_model');
var express = require('express');
var router = express.Router();

router.put("/:id",function(req,res,next){
    designer.updateDesigner(req.params.id,req.body,function(err,rows){
       if(err){
         res.json(err);
       }
       else{
         res.json(rows);
       }
     });
   });
  
    
module.exports=router;
