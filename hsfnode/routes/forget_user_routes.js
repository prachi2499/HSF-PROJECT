var forget_user=require('../models/user_login_model');
var express=require('express');
var router=express.Router();


router.get("/:id", function(req, res, next) {
  forget_user.forgetPwd(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});
module.exports=router;