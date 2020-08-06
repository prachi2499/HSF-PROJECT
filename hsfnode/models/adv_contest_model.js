var db=require('../dbconnec');
var adv_contest={
    getAllAdvertisingContest:function(callback){
        return db.query('select * from a_contest_tbl',callback);
    },
    getAdvertisingContestByid:function(a_contest_id,callback){
        return db.query("select * from a_contest_tbl where a_contest_id=?",[a_contest_id],callback);
    },
    addAdvertisingContest:function(item,callback){
        return db.query("insert into a_contest_tbl values(?,?,?,?,?,?,?,?,?,?)",[item.a_contest_id,item.a_language,item.a_projectname,item.a_timeline,item.a_price,item.s_time,item.e_time,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id],callback);
    },
    updateAdvertiseContest:function(item,a_contest_id,callback)
    {
        return db.query("update a_contest_tbl set a_language=?,a_projectname=?,a_timeline=?,a_price=? where a_contest_id=?",[item.a_language,item.a_projectname,item.a_timeline,item.a_price,a_contest_id],callback);
        
    },
    getAdvertiseContestByUser:function(callback){
        return db.query('select u.name,a.*,s.* from user_tbl u,a_contest_tbl a,subcategory_tbl s where u.email_id=a.fkuser_id and subcat_id=fksubcat_id',callback);
    },
    getAllDesignerContest:function(callback){
        return db.query('SELECT u.name from user_tbl u,a_contest_tbl a where u.email_id=a.fkdesigner_id',callback);
    },
    deleteAdvertiseContest:function(a_contest_id,callback){
        return db.query("delete from a_contest_tbl where a_contest_id=?",[a_contest_id],callback);
    },
    updateadvDuration:function(item,a_contest_id,callback)
    {
        return db.query("update a_contest_tbl set s_time=?,e_time=? where a_contest_id=?",[item.s_time,item.e_time,a_contest_id],callback);
        
    },
    updateDesigneradv:function(id,item,callback){
        return db.query("update a_contest_tbl set fkdesigner_id=? where a_contest_id=?",[item.fkdesigner_id,id],callback);
    },
    deleteAll:function(item,callback)
    {
      var delarr=[];
      for(i=0;i<item.length;i++)
      {
          delarr[i]=item[i].a_contest_id;
      }
      return db.query("delete from a_contest_tbl where a_contest_id in (?)",[delarr],callback);
    },

}
module.exports=adv_contest;