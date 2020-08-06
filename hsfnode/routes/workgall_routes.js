var workgall=require('../models/workgall_model');
var express=require('express');
var router=express.Router();

router.get("/", function(req, res, next) {
    workgall.getAllwork(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
});

router.get("/:id", function(req, res, next) {
  workgall.getWorkByID(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});
module.exports=router;