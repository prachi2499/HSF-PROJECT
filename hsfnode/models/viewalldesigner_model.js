var db=require('../dbconnec');
var viewalldesig={
    getAlldesig:function(callback){
        return db.query('select d_photo,fkdesigner_id from portfolio_tbl',callback);
    },
    getalldesignname:function(callback)
    {
      return db.query("select p.*,u.* from portfolio_tbl p,user_tbl u where p.fkdesigner_id=u.email_id",callback);
    }
  
   
};
module.exports=viewalldesig;