var training_contest=require('../models/train_contest_model');
var express=require('express');
var router=express.Router();

router.get('/:t_contest_id?',function(req,res,next){
    if(req.params.t_contest_id){
    training_contest.getTrainingContestByid(req.params.t_contest_id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    training_contest.getAllTrainingContest(function(err,rows){
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
    training_contest.addTrainingContest(req.body,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:t_contest_id',function(req,res,next){
    training_contest.updateTrainingContest(req.body,req.params.t_contest_id,function(err,rows){
        if(err){
            res.json(err);
    
        }
        else{
            res.json(rows);
        }
    });
    });
    router.delete('/:t_contest_id',function(req,res,next){
        training_contest.deleteTrainingContest(req.params.t_contest_id,function(err,rows){
            if(err){
                res.json(err);
        
            }
            else{
                res.json(rows);
            }
        });
        });

module.exports=router;
