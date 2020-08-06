var userreview=require('../models/review_model');
var express=require('express');
var router=express.Router();

router.get('/:id?',function(req,res,next){
    if(req.params.id){
    userreview.getUserById(req.params.id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    userreview.getAllReview(function(err,rows){
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
