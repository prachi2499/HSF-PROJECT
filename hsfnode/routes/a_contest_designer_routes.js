var advcontest=require('../models/adv_contest_model');
var express=require('express');
var router=express.Router();

router.get('/:a_contest_id?',function(req,res,next){
    if(req.params.a_contest_id){
    advcontest.getAllDesignerContest(req.params.a_contest_id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    advcontest.getAllDesignerContest(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
});
}
});
module.exports=router;
