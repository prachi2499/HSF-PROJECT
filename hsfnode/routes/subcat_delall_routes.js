var delallSubcategory=require('../models/subcategory_model');
var express=require('express');
var router=express.Router();


router.post('',function(req,res,next){
    delallSubcategory.deleteAll(req.body,function(err,rows){
        if(err){
            res.json(err);
        }        
        else{
            res.json(rows);
        }
    });
});
module.exports=router;