var adv_duration=require('../models/adv_contest_model');
var express=require('express');
var router=express.Router();



router.put('/:a_contest_id',function(req,res,next){
    adv_duration.updateadvDuration(req.body,req.params.a_contest_id,function(err,rows){
        if(err){
            res.json(err);
    
        }
        else{
            res.json(rows);
        }
    });
    });
    module.exports=router;