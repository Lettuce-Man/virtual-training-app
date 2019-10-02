import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import {TrainerClassDetails} from "../trainer-class-details/trainer-class-details";
import {ClassesService} from "../../services/classes.service";

@Component({
  selector: 'trainer-class-discover',
  templateUrl: 'trainer-class-discover.html'
})

export class TrainerClassDiscover implements OnInit {

  public allClasses = [];
  private classDetails = TrainerClassDetails;

  constructor(private navCtrl: NavController, private classesService:ClassesService) {
    this.allClasses = this.classesService.getClasses();
  }

  public viewClass(currentClass){
    this.navCtrl.push(this.classDetails, currentClass.id);
  }

  public ionViewDidLoad() {

  }

  public ngOnInit() {
  }


}
