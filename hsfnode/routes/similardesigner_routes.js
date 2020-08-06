var similar=require('../models/getdesigners_model');
var express=require('express');
var router=express.Router();

router.get("/:did", function(req, res, next) {
    similar.getSimilarDesignerbyid(req.params.did,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
  });

module.exports=router;