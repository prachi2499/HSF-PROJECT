var dname_contest_ma=require('../models/designer_upload_contest_model');
var express=require('express');
var router=express.Router();

router.get("/:id", function(req, res, next) {
    dname_contest_ma.getalldesignname(req.params.id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
});

module.exports=router;