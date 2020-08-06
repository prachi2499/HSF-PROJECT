var db=require('../dbconnec'); 
 
var user_login={
 
getUser:function(callback){
 
return db.query("select * from user_tbl ",callback);
 
},
getUserById:function(item,callback){
 
    return db.query("select * from user_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
},

addUser:function(item,callback){
    return db.query("insert into user_tbl values(?,?,?,?,?,?,?,?)",[item.email_id,item.password,item.name,item.mobile_no,item.gender,item.city,item.address,item.type],callback);
},
getUserByemailid:function(id,callback){
    return db.query("select * from user_tbl where email_id=?",[id],callback);
},
updateUser:function(id,item,callback){

    return db.query("update user_tbl set password=?,name=?,mobile_no=?,gender=?,city=?,address=?,type=? where email_id=?",[item.password,item.name,item.mobile_no,item.gender,item.city,item.address,item.type,id],callback);
},
updatePwd:function(id,item,callback){

    return db.query("update user_tbl set password=? where email_id=?",[item.password,id],callback);
},
forgetPwd:function(id,callback){

    return db.query("select * from user_tbl where email_id=?",[id],callback);
},




};


module.exports=user_login;
