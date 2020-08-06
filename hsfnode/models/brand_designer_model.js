var db=require('../dbconnec'); 
 
var brand_designer={
 
updatedesigners:function(id,item,callback){
    return db.query("update b_hire_tbl set b_language=?,b_subject=?,b_design=?,b_description=?,b_timeline=?,b_budget=? ,b_link=?, b_image=?, fkuser_id=?,fkdesigner_id=?, fksubcat_id=? where b_id=?",[item.b_language,item.b_subject,item.b_design,item.b_description,item.b_timeline,item.b_budget,item.b_link,item.b_image,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id,id],callback);
},
getAllDesigner:function(callback){
 
    return db.query("select * from user_tbl where type='Designer' ",callback);
},

};

module.exports=brand_designer;