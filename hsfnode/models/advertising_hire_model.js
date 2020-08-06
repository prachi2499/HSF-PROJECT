var db=require('../dbconnec');
var advertising={
    getAllAdvertising:function(callback){
        return db.query('select * from a_hire_tbl',callback);
    },
   
    getAdvertisingByid:function(id,callback){
        return db.query("select * from a_hire_tbl where a_id=?",[id],callback);
    },
    deleteAdvertise:function(id,callback){
        return db.query("delete from a_hire_tbl where a_id=?",[id],callback);
    },
    updateAdvertise:function(id,item,callback){

        return db.query("update a_hire_tbl set a_language=?,a_projectname=?,a_timeline=?,a_price=? where a_id=?",[item.a_language,item.a_projectname,item.a_timeline,item.a_price,id],callback);
    },
    
    deleteAll:function(item,callback)
    {
      var delarr=[];
      for(i=0;i<item.length;i++)
      {
          delarr[i]=item[i].a_id;
      }
      return db.query("delete from a_hire_tbl where a_id in (?)",[delarr],callback);
    },
    getAllDesigners:function(callback){
        return db.query('SELECT u.name from user_tbl u,a_hire_tbl a where u.email_id=a.fkdesigner_id',callback);
    },
   
    
   
};
module.exports=advertising;