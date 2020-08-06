var db=require('../dbconnec'); 
 
var branding={
 
getAllBranding:function(callback){
return db.query("select * from b_hire_tbl ",callback);
},
getUserByBranding:function(callback){
    return db.query("select u.name,b.*,s.* from user_tbl u,b_hire_tbl b,subcategory_tbl s where u.email_id=b.fkuser_id and subcat_id=fksubcat_id ",callback);
},
    
 addBranding:function(item,filename,callback){
     return db.query("insert into b_hire_tbl(b_language,b_subject,b_design,b_description,b_timeline,b_budget,b_link,b_image,fkuser_id,fkdesigner_id,fksubcat_id) values (?,?,?,?,?,?,?,?,?,?,?)",[item.b_language,item.b_subject,item.b_design,item.b_description,item.b_timeline,item.b_budget,item.b_link,filename,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id],callback);
 },

 getBrandingById:function(id,callback){
     return db.query("select * from b_hire_tbl where b_id=?",[id],callback);
 },

 deleteBrandingById:function(id,callback){
     return db.query("delete from b_hire_tbl where b_id=?",[id],callback);
 },

updateBranding:function(id,item,callback){
    return db.query("update b_hire_tbl set b_language=?,b_subject=?,b_design=?,b_description=?,b_timeline=?,b_budget=? ,b_link=?, b_image=? where b_id=?",[item.b_language,item.b_subject,item.b_design,item.b_description,item.b_timeline,item.b_budget,item.b_link,item.b_image,id],callback);
},

updateImage:function(item,filename,callback){
    return db.query("update b_hire_tbl set b_language=?,b_subject=?,b_design=?,b_description=?,b_timeline=?,b_budget=? ,b_link=?, b_image=? where b_id=?",[item.b_language,item.b_subject,item.b_design,item.b_description,item.b_timeline,item.b_budget,item.b_link,filename,item.b_id],callback);
},

 getAllDesignersbyid:function(id,callback){
 
    return db.query("select u.name from user_tbl u,b_hire_tbl b where u.email_id=b.fkdesigner_id and b.b_id=?",[id],callback);
}
};

module.exports=branding;