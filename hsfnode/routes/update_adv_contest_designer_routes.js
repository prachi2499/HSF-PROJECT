var designer=require('../models/adv_contest_model');
var express = require('express');
var router = express.Router();

router.put("/:id",function(req,res,next){
    designer.updateDesigneradv(req.params.id,req.body,function(err,rows){
       if(err){
         res.json(err);
       }
       else{
         res.json(rows);
       }
     });
   });
  
    
module.exports=router;
