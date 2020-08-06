export class user_b_hire_class{
  constructor(
   public b_id:number,
   public b_language:string,
   public b_subject :string,
   public b_design:string,
   public b_description :string,
   public b_timeline:string,
   public b_budget:number,
   public b_link:string,
   public b_image:string,
   public fkuser_id? :string,
   public fkdesigner_id?:string,
   public fksubcat_id?:number,
   public subcat_id?:number,
   public subcat_name?: string,
   public email_id?:string,
   public name?:string,

   ) {}
}
