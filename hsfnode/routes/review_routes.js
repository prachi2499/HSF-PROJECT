var review=require('../models/review_model');
var express=require('express');
var router=express.Router();

router.get('/:review_id?',function(req,res,next){
    if(req.params.review_id){
    review.getReviewByid(req.params.review_id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    review.getAllReview(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
});
}
});

router.post('/',function(req,res,next){
    review.addReview(req.body,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;
