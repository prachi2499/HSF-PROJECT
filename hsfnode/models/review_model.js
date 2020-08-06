var db=require('../dbconnec');
var review={
    getAllReview:function(callback){
        return db.query('select * from review_tbl',callback);
    },
    getReviewByid:function(review_id,callback){
        return db.query('select * from review_tbl where fkdesigner_id=?',[review_id],callback);
    },
    getUserById:function(id,callback)
    {
        return db.query('select  r.*,u.name from user_tbl u,review_tbl r where u.email_id=r.fkuser_id and r.fkuser_id=?',[id],callback);
    },
    addReview:function(item,callback)
    {
        return db.query("insert into review_tbl (review_id,description,fkuser_id,fkdesigner_id,stars) values (?,?,?,?,?)",[item.review_id,item.description,item.fkuser_id,item.fkdesigner_id,item.stars],callback);
    },
   getallreviewuser:function(id,callback)
   {
     return db.query("select r.*,u.* from review_tbl r,user_tbl u where r.fkuser_id=u.email_id and fkdesigner_id=?",[id],callback);
   }
    
};
module.exports=review;