var category=require('../models/category_model');
var express=require('express');
var router=express.Router();


router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    category.getCategoryByid(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    category.getAllCategory(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  category.addCategory(req.body,function(err,rows){
      if(err){
          res.json(err);

      }
      else{
          res.json(rows);
      }
  });
});

router.put('/:cat_id',function(req,res,next){
  category.updateCategory(req.body,req.params.cat_id,function(err,rows){
      if(err){
          res.json(err);
  
      }
      else{
          res.json(rows);
      }
  });
  });

router.delete('/:cat_id',function(req,res,next){
      category.deleteCategory(req.params.cat_id,function(err,rows){
          if(err){
              res.json(err);
      
          }
          else{
              res.json(rows);
          }
      });
      });




 

  module.exports=router;