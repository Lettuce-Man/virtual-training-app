import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import {TraineeClassDetails} from "../trainee-class-details/trainee-class-details";
import {ClassesService} from "../../services/classes.service";

@Component({
  selector: 'trainee-class-discover',
  templateUrl: 'trainee-class-discover.html'
})

export class TraineeClassDiscover implements OnInit {

  public allClasses = [];
  private classDetails = TraineeClassDetails;

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
