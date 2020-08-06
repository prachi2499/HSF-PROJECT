var db=require('../dbconnec');
var orderdetails={
    getAllOrders(callback)
    {
        return db.query("select * from order_tbl",callback);
    },
    addOrderDetails(item,callback)
    {   
        
       
            return db.query("insert into order_tbl values(?,?,?,?,?,?,?)",[item.o_id,item.fksubcat_id,item.fkuser_id,item.fkdesigner_id,item.o_date,item.o_amount,item.fka_id],callback);
        
    },
        // getUserByorder:function(callback){
        //     return db.query('select u.name, o.*,c.subcat_name from user_tbl u,order_tbl o,subcategory_tbl c where u.email_id=o.fkuser_id and c.subcat_id=o.fksubcat_id  ',callback);
        // }

        // getUserByid:function(id,callback){
        //     return db.query('select  o.*,u.name,c.*  from order_tbl o,user_tbl u,subcategory_tbl c where u.email_id=o.fkuser_id and c.subcat_id=o.fksubcat_id',[id],callback);
        // },

        getDesignerName(id,callback)
        {
    return db.query("select name from user_tbl where email_id=?",[id],callback);
        },
        getSubcatName(id,callback)
        {
    return db.query("select subcat_name from subcategory_tbl where subcat_id=?",[id],callback);
        },
        // gettopfive(callback)
        // {
        //    return db.query("select o_amount from order_tbl ORDER BY o_amount desc LIMIT 5 ",callback);
        // }
        gettopfive(callback)
        {
           return db.query("select subcat_name c ,o_amount o from order_tbl o ,subcategory_tbl c where o.fksubcat_id=c.subcat_id  ORDER BY o_amount desc LIMIT 5  ",callback);
        }
    
};
module.exports=orderdetails;