var db=require('../dbconnec');
var t_designer={
    getAllDesigner_training:function(callback){
        return db.query('select * from user_tbl where type="Designer"',callback);
    },
    updateDesigner_training:function(t_id,item,callback){
        d=new Date(item.t_date);
        return db.query("update t_hire_tbl set t_participants=?,t_type=?,t_budget=?,t_date=?,t_title=?,t_company=?,t_help=?,fkuser_id=?,fkdesigner_id=?,fksubcat_id=? where t_id=?",[item.t_participants,item.t_type,item.t_budget,d,item.t_title,item.t_company,item.t_help,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id,t_id],callback);
    }
};
module.exports=t_designer;