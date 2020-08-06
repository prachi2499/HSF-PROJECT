export class uploadclass{
  constructor(
   public dc_id:number,
   public dc_image:string,
   public fkcontest_id :number,
   public fkdesigner_id:string,
   public email_id?: string,
   public password?: string,
   public name?: string,
   public mobile_no?: string,
   public gender?: string,
   public city?: string,
   public address?: string,
   public type?: string

   ) {}
}
