import { Injectable } from '@angular/core';
import { Session } from '../../models/session';

//MyclassesService - responsible for managing the classes a user has registered for
@Injectable()
export class MyclassesService {

  private classes: Session[];


  constructor() {
      this.classes = [];
  }
  //isRegistered - test to see if a user already registered for a target class
  public isRegistered(classId:number){
    if(this.getClassById(classId)){
      return true;
    }
    else{
      return false;
    }
  }

  //setMyclasses - will register a user for a class
  public setMyclasses(myclass:Session){
    this.classes.push(myclass);
  }

  //getClassById - will return the full class object based on id. Returns null if not found
  public getClassById(id:number){
    for(let x = 0; x < this.classes.length; x++){
      if(this.classes[x].id === id){
        return this.classes[x];
      }
    }
    return null;
  }
  //getClassIndexById - used to find a classes index in the array of classes. returns -1 if not found
  private getClassIndexById(id:number){
    for(let x = 0; x < this.classes.length; x++){
      if(this.classes[x].id === id){
        return x;
      }
    }
    return -1;
  }

  //removeMyclassesByIndex - will unregister a user from a class based on array index of the class.
  public removeMyclassesById(id:number){
    let index = this.getClassIndexById(id)
    if (index > -1) {
      this.classes.splice(index, 1);
    }
    return this.classes;
  }
  //getMyclasses - will get a list of classes a user has registered for
  public getMyclasses(){
    return this.classes;
  }
}
