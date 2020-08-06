var designers=require('../models/t_designer_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    designers.getAllDesigner_training(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:t_id',function(req,res,next){
    designers.updateDesigner_training(req.params.t_id,req.body,function(err,rows){
        if(err){
            res.json(err);
    
        }
        else{
            res.json(rows);
        }
    });
    });
module.exports=router;
