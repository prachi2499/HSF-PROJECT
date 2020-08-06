var adv_contest=require('../models/adv_contest_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next)
{
    adv_contest.getAdvertiseContestByUser(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
});
});


module.exports=router;