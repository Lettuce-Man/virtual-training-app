export interface UserModel {
  type:number,
  name:string,
  email: string,
  settings:{
    acknowledgeZoomNotification:boolean
  }
}
