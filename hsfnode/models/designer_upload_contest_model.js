var db=require('../dbconnec'); 

var uploadimg={

addImage:function(item,filename,callback){
        return db.query("insert into d_contest_upload(dc_image,fkcontest_id,fkdesigner_id) values (?,?,?)",[filename,item.fkcontest_id,item.fkdesigner_id],callback);
},

 
getAllImages:function(callback){
    return db.query("select b.*,d.* from  b_contest_tbl b  d_contest_upload d where b.b_contest_id=d.fkcontest_id",callback);
    },

    getalldesignname:function(id,callback)
    {
      return db.query("select d.*,u.* from d_contest_upload d,user_tbl u where d.fkdesigner_id=u.email_id and d.fkcontest_id=?",[id],callback);
    }
};

module.exports=uploadimg;