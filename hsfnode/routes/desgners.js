var advertising=require('../models/advertising_hire_model');
var express=require('express');
var router=express.Router();


router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    advertising.getAllDesigners(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    advertising.getAllDesigners(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

module.exports=router;