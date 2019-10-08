import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import {TrainerClassDetails} from "../trainer-class-details/trainer-class-details";
import {ClassesService} from "../../services/classes.service";

@Component({
  selector: 'trainer-class-discover',
  templateUrl: 'trainer-class-discover.html'
})

export class TrainerClassDiscover implements OnInit {

  public myClasses = [];
  private classDetails = TrainerClassDetails;

  constructor(private navCtrl: NavController, private classesService:ClassesService) {
    let allClasses = this.classesService.getClasses();
    for (let i = 0; i < allClasses.length; i++) { 
      if(allClasses[i].id >= 4) { //TODO: This is currently a hack Establish trainer-id this can be set to after profile model is created (possibly integrate with existing trainer model?)
        this.myClasses.push(allClasses[i]);
      }
    }
  }

  public viewClass(currentClass){
    this.navCtrl.push(this.classDetails, currentClass.id);
  }

  public ionViewDidLoad() {

  }

  public ngOnInit() {
  }


}
