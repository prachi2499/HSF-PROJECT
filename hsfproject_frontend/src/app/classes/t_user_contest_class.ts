export class tcontest_user_subcat_c{
  constructor(

    public t_contest_id:number,
    public t_participants:number,
    public t_type:string,
    public t_budget:number,
    public t_date:Date,
    public t_title:string,
    public t_company:string,
    public t_help:string,
    public s_time?:string,
    public e_time?:string,
    public fkuser_id?:string,
    public fkdesigner_id?:string,
    public fksubcat_id?:number,
    public name?:string,
    public email_id?:string,
    public subcat_id?:number,
    public subcat_name?:string
    ){}
}
