import { Injectable } from '@angular/core';

import classesData from '../data/class-data';
import {MyclassesService} from'./myclasses.service';
import { Session } from '../../models/session';
import { Trainer } from '../../models/trainer';
import { Target } from '../../models/target';

//ClassesService - resopnsible for maintaining a list of all possible classes a user can browse
@Injectable()
export class ClassesService {

  private classes: Session[];

  constructor(private myclasses: MyclassesService) {
    //TODO: Directly connect this to create classes page
    //Create class model based on user.model
    //See user.service.ts for example
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

  //addClass - adds a class to the overall list of classes

  public addClass(
    id: number, 
    title: string, 
    description: string, 
    equipment: string, 
    arms: boolean, 
    chest: boolean, 
    back: boolean, 
    glutes: boolean, 
    core: boolean, 
    calves: boolean, 
    legs: boolean, 
    shoulders: boolean, 
    calories: number, 
    startdate: string, 
    enddate: string, 
    starttime: string, 
    endtime: string, 
    level: number, 
    price: string, 
    day: string): Promise<Session>{
    var targets: Target[] = [];
    let newClass = new Session(id, title, description, equipment, "assets/imgs/class2.png", {
      image:'assets/imgs/trainer2.png',
      name:'Nathan Williams',
      description:'Very swole boi',
      experience:'Has been swole for very long time',
      specialization:'Can lift very heavy things for you'
    }, targets, calories, startdate, enddate, starttime, endtime, level, price, day, "https://zoom.us/j/5514005419", []);
    if(arms == true) {
      targets.push({areaType: 'arms', displayName: 'Arms'});
    }
    if(chest == true) {
      targets.push({areaType: 'chest', displayName: 'Chest'});
    }
    if(back == true) {
      targets.push({areaType: 'back', displayName: 'Back'});
    }
    if(glutes == true) {
      targets.push({areaType: 'glutes', displayName: 'Glutes'});
    }
    if(core == true) {
      targets.push({areaType: 'core', displayName: 'Core'});
    }
    if(calves == true) {
      targets.push({areaType: 'calves', displayName: 'Calves'});
    }
    if(legs == true) {
      targets.push({areaType: 'legs', displayName: 'Legs'});
    }
    if(shoulders == true) {
      targets.push({areaType: 'shoulders', displayName: 'Shoulders'});
    }
    this.classes.push(newClass);
    for(let x = 0; x < this.classes.length; x++){
      this.classes[x].id = x;
      this.classes[x].registeredstudents = [];
      this.classes[x].zoom = "https://zoom.us/j/5514005419";
    }
    return new Promise((resolve, reject) => {
      return resolve(newClass);
    });
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
