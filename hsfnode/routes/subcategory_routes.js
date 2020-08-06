var subcategory=require('../models/subcategory_model');
var express=require('express');
var router=express.Router();


router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    subcategory.getSubcategoryByid(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    subcategory.getAllSubcategory(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  subcategory.addSubCategory(req.body,function(err,rows){
      if(err){
          res.json(err);

      }
      else{
          res.json(rows);
      }
  });
});
router.put('/:subcat_id',function(req,res,next){
  subcategory.updateSubCategory(req.body,req.params.subcat_id,function(err,rows){
      if(err){
          res.json(err);
  
      }
      else{
          res.json(rows);
      }
  });
  });
  router.delete('/:subcat_id',function(req,res,next){
      subcategory.deleteSubCategory(req.params.subcat_id,function(err,rows){
          if(err){
              res.json(err);
      
          }
          else{
              res.json(rows);
          }
      });
      });




 

  module.exports=router;