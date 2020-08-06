var training=require('../models/t_hire_model');
var express=require('express');
var router=express.Router();

router.get('/:t_id?',function(req,res,next){
    if(req.params.t_id){
    training.getTrainingByid(req.params.t_id,function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
    });
}
else{
    training.getAllTraining(function(err,rows){
        if(err){
            res.json(err);

        }
        else{
            res.json(rows);
        }
});
}
});
router.delete('/:t_id',function(req,res,next){
    training.deleteTraining(req.params.t_id,function(err,rows){
        if(err){
            res.json(err);
    
        }
        else{
            res.json(rows);
        }
    });
    });
    router.put('/:t_id',function(req,res,next){
        training.updateTraining(req.body,req.params.t_id,function(err,rows){
            if(err){
                res.json(err);
        
            }
            else{
                res.json(rows);
            }
        });
        });
        router.post('/',function(req,res,next){
            training.addTraining(req.body,function(err,rows){
                if(err){
                    res.json(err);
        
                }
                else{
                    res.json(rows);
                }
            });
        });
    

module.exports=router;
