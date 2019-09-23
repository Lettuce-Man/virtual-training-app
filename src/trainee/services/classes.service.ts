import { Injectable } from '@angular/core';

import classesData from '../data/class-data';
import {MyclassesService} from'./myclasses.service';
import { Session } from '../../models/session';

//ClassesService - resopnsible for maintaining a list of all possible classes a user can browse
@Injectable()
export class ClassesService {

  private classes: Session[];

  constructor(private myclasses: MyclassesService) {
    this.classes = classesData;

    //programatically adding an id and registeredStudents model.
    //This is a little hacky and should probably be moved into the model themselves
    for(let x = 0; x < this.classes.length; x++){
      this.classes[x].id = x;
      this.classes[x].registeredstudents = [];
      this.classes[x].zoom = "https://zoom.us/j/5514005419";
    }
  }
  //getClasses - gets a full list of classes
  public getClasses():any{
    return this.classes;
  }
  //getClass - gets a class model for a passed in id
  public getClass(id:number){
    return this.classes[id];
  }

  //register - Register for a class. Updates the myclasses service with the target class.
  public register(id:number, classid:number){
    this.classes[classid].registeredstudents.push(id);
    this.myclasses.setMyclasses(this.classes[classid]);
  }
}
