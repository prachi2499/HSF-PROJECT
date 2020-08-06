export class adv_hire_class{
  constructor(
      public a_id:number,
      public a_language:string,
      public a_projectname:String,
      public a_timeline:String,
      public a_price:number,
      public fkuser_id?:String,
      public fkdesigner_id?:String,
      public fksubcat_id?:number

  ){

  }
}
