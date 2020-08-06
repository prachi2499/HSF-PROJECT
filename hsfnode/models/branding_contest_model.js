var db=require('../dbconnec'); 
 
var brandingcontest={
 
    getAllBranding:function(callback){
        return db.query("select * from b_contest_tbl ",callback);
    },
    getUserByBranding:function(callback){
        return db.query("select u.name,b.*,s.* from user_tbl u,b_contest_tbl b,subcategory_tbl s where u.email_id=b.fkuser_id and subcat_id=fksubcat_id ",callback);
    },
    getAllDesigners:function(callback){
 
        return db.query("select u.name from user_tbl u,b_contest_tbl b where u.email_id=b.fkdesigner_id",callback);
    },
    deleteBrandingById:function(id,callback){
        return db.query("delete from b_contest_tbl where b_contest_id=?",[id],callback);
    },
    addBranding:function(item,callback){
        return db.query("insert into b_contest_tbl(b_language,b_subject,b_design,b_description,b_budget,s_time,e_time,fkuser_id,fkdesigner_id,fksubcat_id) values (?,?,?,?,?,?,?,?,?,?)",[item.b_language,item.b_subject,item.b_design,item.b_description,item.b_budget,item.s_time,item.e_time,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id],callback);
    },
    updateDuration:function(item,b_contest_id,callback){
        return db.query("update b_contest_tbl set s_time=?,e_time=? where b_contest_id=?",[item.s_time,item.e_time,b_contest_id],callback);
    },
    getBrandingById:function(id,callback){
        return db.query("select * from b_contest_tbl where b_contest_id=?",[id],callback);
    },
    getImageById:function(id,u_id,callback){
        return db.query(" select b.*,d.* from b_contest_tbl b,d_contest_upload d where d.fkcontest_id=? and b. b_contest_id=d.fkcontest_id and b.fkuser_id=?",[id,u_id],callback);
    },

    updateDesigner:function(id,item,callback){
        return db.query("update b_contest_tbl set fkdesigner_id=? where b_contest_id=?",[item.fkdesigner_id,id],callback);
    },

    updateBranding:function(id,item,callback){
        return db.query("update b_contest_tbl set b_language=?,b_subject=?,b_design=?,b_description=?,b_budget=?,s_time=?,e_time=? where b_contest_id=?",[item.b_language,item.b_subject,item.b_design,item.b_description,item.b_budget,item.s_time,item.e_time,id],callback);
    }

   // select d.*,b.* from d_contest_upload d,b_contest_tbl b where d.fkcontest_id=b.b_contest_id and d.dc_id=?

};
module.exports=brandingcontest;
