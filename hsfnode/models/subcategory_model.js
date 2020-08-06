var db=require('../dbconnec');
var subcategory={
    getAllSubcategory:function(callback){
        return db.query('select * from subcategory_tbl',callback);
    },
   
    getSubcategoryByid:function(id,callback){
        return db.query("select * from subcategory_tbl where fkcat_id=?",[id],callback);
    },
    deleteSubcatByCat:function(fkcat_id,callback)
    {
        return db.query("delete from subcategory_tbl where fkcat_id=?",[fkcat_id],callback)
    },
    addSubCategory:function(item,callback)
    {
        return db.query("insert into subcategory_tbl (subcat_name,fkcat_id) values (?,?)",[item.subcat_name,item.fkcat_id],callback);
    },
    updateSubCategory:function(item,subcat_id,callback)
    {
        return db.query("update subcategory_tbl set subcat_name=?,fkcat_id=? where subcat_id=?",[item.subcat_name,item.fkcat_id,subcat_id],callback);
        
    },
    deleteSubCategory:function(subcat_id,callback)
    {
        return db.query("delete from subcategory_tbl where subcat_id=?",[subcat_id],callback);
    },
    deleteAll:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].subcat_id;
        }
        return db.query("delete from subcategory_tbl where subcat_id in (?)",[delarr],callback);
    }
   
};
module.exports=subcategory;