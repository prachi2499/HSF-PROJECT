var duration=require('../models/branding_contest_model');
var express = require('express');
var router = express.Router();

router.put("/:b_contest_id",function(req,res,next){
    duration.updateDuration(req.body,req.params.b_contest_id,function(err,rows){
       if(err){
         res.json(err);
       }
       else{
         res.json(rows);
       }
     });
   });
module.exports=router;
