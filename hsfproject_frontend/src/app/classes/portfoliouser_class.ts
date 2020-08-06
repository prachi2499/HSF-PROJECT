export class portfoliouser_c{
  constructor(
    public image_id:number,
    public email_id: string,
    public fkdesigner_id:string,
    public fksubcat_id?:number,

      public d_description?:string,
      public d_photo?:string,
      public image1?:string,
      public image2?:string,
      public image3?:string,
      public image4?:string,
      public image5?:string,
      public image6?:string,

      public video1?:string,
      public video2?:string,

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
