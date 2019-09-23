import { Component, OnInit} from '@angular/core';
import { NavController } from "ionic-angular";
import {MyclassesService} from '../../services/myclasses.service';
import {TraineeClassDetails} from "../trainee-class-details/trainee-class-details";

@Component({
  selector: 'trainee-my-class',
  templateUrl: 'trainee-my-class.html',
})
export class TraineeMyClass implements OnInit{

  public allClasses = [];
  public currentDate:string = '';
  private pageClassDetails = TraineeClassDetails;


  constructor(public navCtrl: NavController,private myclasses: MyclassesService) {
      //get my registered classes
      this.allClasses = this.myclasses.getMyclasses();

      //set to the current day and time
      this.currentDate = new Date().toISOString();
  }

  ionViewDidLoad() {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.allClasses = this.myclasses.getMyclasses();
  }

  public viewClass(currentClass){
    this.navCtrl.push(this.pageClassDetails, currentClass.id);
  }

  //goToDiscover - Uses the nav bar to change to discover view

}
