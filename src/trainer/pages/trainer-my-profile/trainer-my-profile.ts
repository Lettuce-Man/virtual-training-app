import { Component, OnInit} from '@angular/core';
import { NavController, MenuController } from "ionic-angular";
import {TrainerClassDetails} from "../trainer-class-details/trainer-class-details";
import { UserService } from '../../../user';
import { Trainer } from '../../../models/trainer';
import { ProfileDataService } from '../../services/profiledata.service';
import { TrainerClassDiscover } from '../trainer-class-discover/trainer-class-discover';

@Component({
  selector: 'trainer-my-profile',
  templateUrl: 'trainer-my-profile.html',
})
export class TrainerMyProfile implements OnInit{

  public currentDate:string = '';
  private profileUpdated = false;
  private trainerData: Trainer;
  


  constructor(public navCtrl: NavController, private profileData: ProfileDataService, private menuCtrl: MenuController) {

      //set to the current day and time
      this.currentDate = new Date().toISOString();
      let updatedData = profileData.getTrainerProfile();
      if(updatedData != null) {
        this.profileUpdated = true;
        this.trainerData = updatedData;

      }


  }

  public returntoYourClasses() {
    this.navCtrl.setRoot(TrainerClassDiscover);
  }

  ionViewDidLoad() {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
  }

  //goToDiscover - Uses the nav bar to change to discover view

}
