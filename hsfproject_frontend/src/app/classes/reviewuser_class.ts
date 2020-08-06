export class reviewuser_c{
  constructor(
    public email_id: string,
    public review_id:number,
    public description:string,
    public fkuser_id:string,
    public fkdesigner_id:string,
    public stars:number,
    public password?: string,
    public name?: string,
    public mobile_no?: string,
    public gender?: string,
    public city?: string,
    public address?: string,
    public type?: string,

   ) {}
}
