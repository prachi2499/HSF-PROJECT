var view=require('../models/user_login_model');
var express=require('express');
var router=express.Router();
router.get("/:email_id?", function(req, res, next) {
    view.getUserByemailid(req.params.email_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    });

    router.put('/:email_id', function(req, res, next) {
        view.updateUser(req.params.email_id,req.body, function(err,rows) {
            if (err) {
              res.json(err);
            } 
            else {
              res.json(rows);
            }
          });
        });
    
module.exports=router;
