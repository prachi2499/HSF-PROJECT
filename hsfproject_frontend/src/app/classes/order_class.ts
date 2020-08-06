export class order_c{
  constructor(
      public o_id:number,
      public fksubcat_id:number,
      public fkuser_id:String,
      public fkdesigner_id:String,
      public o_date:string,
      public o_amount:number,
      public fka_id:number,
      public subcat_name?:string,
      public fkcat_id?:number,
      public subcat_id?:number,
      public email_id?: string,
      public password?: string,
      public name?: string,
      public mobile_no?: string,
      public gender?: string,
      public city?: string,
      public address?: string,
      public type?: string






  ){

  }
}
