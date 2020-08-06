var trainingcontest=require('../models/train_contest_model');
var express=require('express');
var router=express.Router();

router.get('/:t_contest_id?',function(req,res,next){
    if(req.params.t_contest_id){
    trainingcontest.getAllDesignerContest(req.params.t_contest_id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    trainingcontest.getAllDesignerContest(function(err,rows){
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
