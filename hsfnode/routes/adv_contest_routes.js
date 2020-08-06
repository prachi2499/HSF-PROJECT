var adv_contest=require('../models/adv_contest_model');
var express=require('express');
var router=express.Router();

router.get('/:a_contest_id?',function(req,res,next){
    if(req.params.a_contest_id){
    adv_contest.getAdvertisingContestByid(req.params.a_contest_id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    adv_contest.getAllAdvertisingContest(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
});
}
});
router.post('/',function(req,res,next){
    adv_contest.addAdvertisingContest(req.body,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:a_contest_id',function(req,res,next){
    adv_contest.updateAdvertiseContest(req.body,req.params.a_contest_id,function(err,rows){
        if(err){
            res.json(err);
    
        }
        else{
            res.json(rows);
        }
    });
    });
    router.delete('/:a_contest_id',function(req,res,next){
    adv_contest.deleteAdvertiseContest(req.params.a_contest_id,function(err,rows){
            if(err){
                res.json(err);
        
            }
            else{
                res.json(rows);
            }
        });
        });

      
    
module.exports=router;