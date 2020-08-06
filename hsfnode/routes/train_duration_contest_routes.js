var duration=require('../models/train_contest_model');
var express=require('express');
var router=express.Router();



router.put('/:t_contest_id',function(req,res,next){
    duration.updateDuration(req.body,req.params.t_contest_id,function(err,rows){
        if(err){
            res.json(err);
    
        }
        else{
            res.json(rows);
        }
    });
    });
    module.exports=router;