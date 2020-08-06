var db=require('../dbconnec'); 

var pastorder={
getPastOrderById:function(id,callback){
 
        return db.query("select * from order_tbl where fkdesigner_id=?",[id],callback);
         
},
getName:function(id,callback){
        return db.query("select o.*,u.* from order_tbl o,user_tbl u where o.fkuser_id=u.email_id and o.fkdesigner_id=?",[id],callback);
},

// getPastOrderDetails(id,callback)
//     {
//         return db.query("select bd.*,d.* from billdetails_tbl bd,dish_tbl d where bd.fk_dish_id=d.Id and bd.fk_bill_no=?",[id],callback);
//     }

getphoto:function(id,callback)
{
    return db.query("SELECT image1,image2,image3,image4,image5,image6 FROM `portfolio_tbl` WHERE fkdesigner_id=?",[id],callback);
}

};

module.exports=pastorder;