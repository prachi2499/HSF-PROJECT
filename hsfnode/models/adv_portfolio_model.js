var db=require('../dbconnec');
var portfolio={
    getAllPortfolio:function(callback){
        return db.query('select * from portfolio_tbl',callback);
    },
   
    getPortfolioByid:function(id,callback){
        return db.query("select * from portfolio_tbl where fkdesigner_id=?",[id],callback);
    },
  
   
    
   
};
module.exports=portfolio;