export class t_hire_class{
  constructor(

    public t_id:number,
    public t_participants:number,
    public t_type:string,
    public t_budget:number,
    public t_date:Date,
    public t_title:string,
    public t_company:string,
    public t_help:string,
    public fkuser_id:string,
    public fkdesigner_id:string,
    public fksubcat_id:number
    ){}
}
