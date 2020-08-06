var db=require('../dbconnec');
var designer={
   
    getAllDesigner:function(callback){
        return db.query('select * from user_tbl where type="Designer"',callback);
    },

   
    
    updateDesigner:function(id,item,callback){
        console.log(id);
        console.log(item.fkdesigner_id);
        return db.query("update a_hire_tbl set fkdesigner_id=? where a_id=?",[item.fkdesigner_id,id],callback);
    },

    getSimilarDesignerbyid:function(did,callback){
        return db.query('select * from user_tbl where email_id not in (?) and type="Designer"',[did],callback);
    }
   
    
};
module.exports=designer;