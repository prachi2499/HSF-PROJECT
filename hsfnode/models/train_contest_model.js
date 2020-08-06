var db=require('../dbconnec');
var training_contest={

    getAllTrainingContest:function(callback){
        return db.query('select * from t_contest_tbl',callback);
    },
    getTrainingContestByid:function(t_contest_id,callback){
        return db.query('select * from t_contest_tbl where t_contest_id=?',[t_contest_id],callback);
    },
  
    addTrainingContest:function(item,callback)
    {
        //var today=new Date();
        d=new Date(item.t_date);
        return db.query("insert into t_contest_tbl(t_participants,t_type,t_budget,t_date,t_title,t_company,t_help,s_time,e_time,fkuser_id,fkdesigner_id,fksubcat_id) values(?,?,?,?,?,?,?,?,?,?,?,?)",[item.t_participants,item.t_type,item.t_budget,d,item.t_title,item.t_company,item.t_help,item.s_time,item.e_time,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id],callback);
    },
    updateTrainingContest:function(item,t_contest_id,callback)
    {
        return db.query("update t_contest_tbl set t_participants=?,t_type=?,t_budget=?,t_date=?,t_title=?,t_company=?,t_help=?,fkuser_id=?,fkdesigner_id=?,fksubcat_id=? where t_contest_id=?",[item.t_participants,item.t_type,item.t_budget,item.t_date,item.t_title,item.t_company,item.t_help,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id,t_contest_id],callback);
        
    },
    deleteTrainingContest:function(t_contest_id,callback)
    {
        return db.query("delete from t_contest_tbl where t_contest_id=?",[t_contest_id],callback);
    },
    getTrainingContestByUser:function(callback){
        return db.query('select u.name,t.*,s.* from user_tbl u,t_contest_tbl t,subcategory_tbl s where u.email_id=t.fkuser_id and subcat_id=fksubcat_id',callback);
    },
    getAllDesignerContest:function(callback){
        return db.query('select u.name from user_tbl u,t_contest_tbl a where u.email_id=a.fkdesigner_id',callback);
    },
    deleteMultiple:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].t_contest_id;
        }
        return db.query("delete from t_contest_tbl where t_contest_id in (?)",[delarr],callback);
    },
    updateDuration:function(item,t_contest_id,callback)
    {
        return db.query("update t_contest_tbl set s_time=?,e_time=? where t_contest_id=?",[item.s_time,item.e_time,t_contest_id],callback);
        
    },
    updateDesigner:function(id,item,callback){
        return db.query("update t_contest_tbl set fkdesigner_id=? where t_contest_id=?",[item.fkdesigner_id,id],callback);
    },
}
module.exports=training_contest;