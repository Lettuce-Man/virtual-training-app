import { Component, OnInit} from '@angular/core';
import { NavController } from "ionic-angular";
import {MyclassesService} from '../../services/myclasses.service';
import {TrainerClassDetails} from "../trainer-class-details/trainer-class-details";

@Component({
  selector: 'trainer-my-profile',
  templateUrl: 'trainer-my-profile.html',
})
export class TrainerMyProfile implements OnInit{

  public currentDate:string = '';


  constructor(public navCtrl: NavController,private myclasses: MyclassesService) {

      //set to the current day and time
      this.currentDate = new Date().toISOString();
  }

  ionViewDidLoad() {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
  }

  //goToDiscover - Uses the nav bar to change to discover view

}
