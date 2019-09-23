export interface UserModel {
  name:string,
  email: string,
  settings:{
    acknowledgeZoomNotification:boolean
  }
}
