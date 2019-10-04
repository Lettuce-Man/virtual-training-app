export interface UserModel {
  type:boolean,
  name:string,
  email: string,
  settings:{
    acknowledgeZoomNotification:boolean
  }
}
