var training=require('../models/t_hire_model');
var express=require('express');
var router=express.Router();

router.get('/:t_id?',function(req,res,next){
    if(req.params.t_id){
    training.getAllDesigner(req.params.t_id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    training.getAllDesigner(function(err,rows){
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
