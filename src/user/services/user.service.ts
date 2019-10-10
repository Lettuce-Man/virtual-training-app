import { Injectable } from '@angular/core';

import userData from '../data/user-data';
import { UserModel } from '../models/user.model';
import { type } from 'os';
import { Trainer } from '../../models/trainer';

@Injectable()
/*
* UserService - responsible for handling user log in and sign up. This service manages
* the user model and is a single point for user interaction.
*/
export class UserService {

  private currentUser: UserModel;
  private trainerData: Trainer;

  //TODO: this is just used for MOCK data, remove when api implemented
  private userData:{name:string,email:string,password:string,type:boolean}[];

  constructor() {
    //TODO: this is just used for MOCK data, remove when api implemented
    this.userData = userData;
  }

  /*
  * createUserModel - internal function to create a valid user model
  */
 private createTraineeModel(name: string, email:string):UserModel{
  return {
    type: false, //0 for trainee
    name:name,
    email:email,
    settings:{
      acknowledgeZoomNotification:false
    }
  }
}

  private createTrainerModel(name: string, email:string):UserModel{
    return {
      type: true, //1 for trainer
      name:name,
      email:email,
      settings:{
        acknowledgeZoomNotification:false
      }
    }
  }

  public getTrainerProfile():Trainer {
    return this.trainerData;
  }

  /*
  * getCurrentUser - get access to the current user
  * returns: user model of currently logged in user
  */
  public getCurrentUser():UserModel{
    return this.currentUser;
  }

  /*
  * signIn - call to sign into the application
  * returns: valid user model if user found for email and password
  */
  public signIn(email:string, password:string, type:boolean):Promise<UserModel>{
    return new Promise((resolve, reject) => {
      for(let x = 0; x < this.userData.length; x++){
        if(email === this.userData[x].email){
          if(password === this.userData[x].password){
            if(type == this.userData[x].type){
              if(type == false){
                this.currentUser = this.createTraineeModel(this.userData[x].name, this.userData[x].email);
                return resolve(this.currentUser);
              } 
              else{
                this.currentUser = this.createTrainerModel(this.userData[x].name, this.userData[x].email);
                return resolve(this.currentUser);
              }
            } 
            else {
              return reject('Invalid password.');
            }
          }
        }
      }
    return reject('User not found');
    });
  }

  /*
  * signUp - call to sign up and create a user for the application
  * returns: valid user model if user can be created
  */
  public signUp(name: string, email:string, password:string, type:boolean):Promise<UserModel>{
    return new Promise((resolve, reject) => {
      this.userData.push({name: name, email:email, password:password, type:type})
      if(type == false) {
        this.currentUser = this.createTraineeModel(name, email);
      return resolve( this.currentUser);
      } 
      else {
        this.currentUser = this.createTrainerModel(name, email);
        return resolve( this.currentUser);
      }
    });
  }

  /*
  * signOut - call to sign out of the application
  * returns: valid user model if user found for email and password
  */
  public signOut():Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.currentUser = null;
      return resolve(true);
    });
  }

  /*
  * updateSettingZoomNotification - Sets the zoom notification settings
  */
  public updateSettingZoomNotification(checked:boolean){
    if(this.currentUser){
      this.currentUser.settings.acknowledgeZoomNotification = checked;
    }
  }
  /*
  * updateSettingZoomNotification - Gets the zoom notification settings
  */
  public getSettingZoomNotification(){
    if(this.currentUser){
      return this.currentUser.settings.acknowledgeZoomNotification;
    }

    return false;
  }
}
