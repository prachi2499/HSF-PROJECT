var db=require('../dbconnec');
var addadv_hire={
    getAllAdvertising:function(callback){
        return db.query('select * from a_hire_tbl',callback);
    },
   
    getAdvertisingByid:function(id,callback){
        return db.query("select * from a_hire_tbl where a_id=?",[id],callback);
    },
  
    addAdvertise:function(item,callback){
        console.log(item.a_id);
        return db.query("insert into a_hire_tbl values(?,?,?,?,?,?,?,?)",[item.a_id,item.a_language,item.a_projectname,item.a_timeline,item.a_price,item.fkuser_id,item.fkdesigner_id,item.fksubcat_id],callback);
    }
   
};
module.exports=addadv_hire;