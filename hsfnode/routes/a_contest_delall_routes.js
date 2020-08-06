var adv_contest=require('../models/adv_contest_model');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next)
{
 adv_contest.deleteAll(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
        });
});
module.exports=router;