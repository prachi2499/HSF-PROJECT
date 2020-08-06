var db=require('../dbconnec');
var category={
    getAllCategory:function(callback){
        return db.query('select * from category_tbl',callback);
    },
   
    getCategoryByid:function(id,callback){
        return db.query("select * from category_tbl where cat_id=?",[id],callback);
    },
    addCategory:function(item,callback)
    {
        return db.query("insert into category_tbl values(?,?)",[item.cat_id,item.cat_name],callback);
    },
    updateCategory:function(item,cat_id,callback)
    {
        return db.query("update category_tbl set cat_name=? where cat_id=?",[item.cat_name,cat_id],callback);
        
    },
    deleteCategory:function(cat_id,callback)
    {
        var sub=this.fkcat_id;
        // console.log(this.sub);
        return db.query("delete from category_tbl where cat_id=?",[cat_id],callback);
        // return db.query("delete from subcategory_tbl where fkcat_id=?",[sub],callback);
    },
    
    deleteAll:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].cat_id;
        }
        return db.query("delete from category_tbl where cat_id in (?)",[delarr],callback);
    },
    catsubcat:function(callback)
    {
return db.query('select c.*,s.* from category_tbl c,subcategory_tbl s where c.cat_id=s.fkcat_id',callback);
    }
   
};
module.exports=category;