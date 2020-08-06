var login=require('../models/user_login_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){

   login.getUser(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
     });
    });
   
 router.post('/',function(req,res,next){
 
        login.getUserById(req.body,function(err,rows){
          if(err)
          {
          res.json(err);
          }
          else
          {
          res.json(rows);
          }
          });
         });
    
module.exports=router;