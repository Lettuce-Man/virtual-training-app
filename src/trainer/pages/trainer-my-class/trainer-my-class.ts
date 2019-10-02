import { Component, OnInit} from '@angular/core';
import { NavController } from "ionic-angular";
import {MyclassesService} from '../../services/myclasses.service';
import {TrainerClassDetails} from "../trainer-class-details/trainer-class-details";

@Component({
  selector: 'trainer-my-class',
  templateUrl: 'trainer-my-class.html',
})
export class TrainerMyClass implements OnInit{

  public allClasses = [];
  public currentDate:string = '';
  private pageClassDetails = TrainerClassDetails;


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
