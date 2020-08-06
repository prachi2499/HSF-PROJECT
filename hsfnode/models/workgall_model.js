var db=require('../dbconnec');
var workgall={
    getAllwork:function(callback){
        return db.query('select * from workgall_tbl',callback);
    },
    getWorkByID:function(id,callback){

        return db.query("select * from workgall_tbl where fkcat_id=?",[id],callback);

    },
    getAllBrandwork:function(callback){
        return db.query('select * from workgall_tbl where fkcat_id=2',callback);
    },

   
};
module.exports=workgall;