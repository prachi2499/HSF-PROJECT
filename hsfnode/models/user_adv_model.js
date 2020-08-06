var db=require('../dbconnec');
var useradv={
    getUserByadv:function(callback){
        return db.query('select u.name, a.*,c.* from user_tbl u,a_hire_tbl a,subcategory_tbl c where u.email_id=a.fkuser_id and subcat_id=fksubcat_id  ',callback);
    },
    getAllAdvertising:function(callback){
        return db.query('select * from a_hire_tbl',callback);
    }
   
    
};
module.exports=useradv;