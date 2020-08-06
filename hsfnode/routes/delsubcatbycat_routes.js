var subcategory=require('../models/subcategory_model');
var express=require('express');
var router=express.Router();

router.delete('/:fkcat_id',function(req,res,next){
    subcategory.deleteSubcatByCat(req.params.fkcat_id,function(err,rows){
        if(err){
            res.json(err);
    
        }
        else{
            res.json(rows);
        }
    });
    });
    module.exports=router;
