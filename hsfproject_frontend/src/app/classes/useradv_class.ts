export class user_adv_hire_class{
  constructor(
    public a_id:number,

    public a_language:string,
      public a_projectname:String,
      public a_timeline:String,
      public a_price:number,
      public fkuser_id?:String,
      public fkdesigner_id?:string,
      public fksubcat_id?:number,
      public email_id?:string,
      public name?:string,
      public subcat_id?:number,
      public subcat_name?:string




  ){

  }
}
