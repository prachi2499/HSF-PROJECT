var training_contest=require('../models/train_contest_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next)
{
    training_contest.getTrainingContestByUser(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
});
});


module.exports=router;