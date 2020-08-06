var db=require('../dbconnec');
var training={
    getTrainingByUser:function(callback){
        return db.query('select u.name,t.*,s.* from user_tbl u,t_hire_tbl t,subcategory_tbl s where u.email_id=t.fkuser_id and subcat_id=fksubcat_id',callback);
    },
    getAllDesigner:function(callback){
        return db.query('select u.name from user_tbl u,t_hire_tbl a where u.email_id=a.fkdesigner_id',callback);
    },
    getAllTraining:function(callback){
        return db.query('select * from t_hire_tbl',callback);
    },
    getTrainingByid:function(t_id,callback){
        return db.query('select * from t_hire_tbl where t_id=?',[t_id],callback);
    },
    addTraining:function(item,callback)
    {
        var today=new Date();
        return db.query("insert into t_hire_tbl(t_id,t_participants,t_type,t_budget,t_date,t_title,t_company,t_help,fkuser_id,fkdesigner_id,fksubcat_id) values(?,?,?,?,?,?,?,?,?,?,?)",[item.t_id,item.t_participants,item.t_type,item.t_budget,today,item.t_title,item.t_company,item.t_help,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id],callback);
    },
    deleteTraining:function(t_id,callback)
    {
        return db.query("delete from t_hire_tbl where t_id=?",[t_id],callback);
    },
    updateTraining:function(item,t_id,callback)
    {
        return db.query("update t_hire_tbl set t_participants=?,t_type=?,t_budget=?,t_date=?,t_title=?,t_company=?,t_help=? where t_id=?",[item.t_participants,item.t_type,item.t_budget,item.t_date,item.t_title,item.t_company,item.t_help,t_id],callback);
        
    },
    deleteAll:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].t_id;
        }
        return db.query("delete from t_hire_tbl where t_id in (?)",[delarr],callback);
    },
   
}
module.exports=training;