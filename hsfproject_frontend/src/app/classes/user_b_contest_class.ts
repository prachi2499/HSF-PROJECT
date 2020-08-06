export class user_b_contest_class{
  constructor(
   public b_contest_id:number,
   public b_language:string,
   public b_subject :string,
   public b_design:string,
   public b_description :string,
   public b_budget:number,
   public s_time?:string,
   public e_time?:string,
   public fkuser_id? :string,
   public fkdesigner_id?:string,
   public fksubcat_id?:number,
   public subcat_id?:number,
   public subcat_name?: string,
   public email_id?:string,
   public name?:string,
   ) {}
}
