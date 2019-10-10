import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { NavController, AlertController, MenuController} from 'ionic-angular';
import { TrainerClassDiscover } from '../../../trainer';
import { UserService } from '../../../user';
import { Time, WeekDay } from '@angular/common';
import { TrainerMyProfile } from '../trainer-my-profile/trainer-my-profile';
import { ProfileDataService } from '../../services/profiledata.service';
import { Trainer } from '../../../models/trainer';

export class Profile {
  name: string;
  description: string;
  experience: string;
  specialization: string;
}

@Component({
  selector: 'account-signup',
  templateUrl: 'trainer-create-profile.html',
})
/*
TrainerSignup - Page that does the new trainer creation.
*/
export class CreateProfile implements OnInit{

  public imageURI: any;
  public imageFileName: any;
  public newclassform: FormGroup;
  public profileData: Profile = { 
    "name": "", 
    "description": "",
    "experience": "",
    "specialization": "", 
  };

  constructor(private navCtrl: NavController,private alertCtrl: AlertController, private menuCtrl: MenuController, private dataProfile: ProfileDataService) {
  }

  ngOnInit() {
    //Setup the initial validation for the page
    this.newclassform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      experience: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      specialization: new FormControl('', [Validators.required, Validators.maxLength(250)]),

    });
  }
  
  //runs upon completion of form
  updateProfile() {
    if(this.newclassform.invalid === true){
      this.alertCtrl.create({
        title: 'Error',
        subTitle:'Please make sure all inputs have been filled out.',
        buttons: [{
            text:'Dismiss'
        }]
      }).present();
      return;
    }
    this.dataProfile.updateTrainerProfile(this.profileData.name, this.profileData.description, this.profileData.experience, this.profileData.specialization);
    this.navCtrl.setRoot(TrainerMyProfile);
  }

  /*
  onGoBack - Go back a screen.
  */
  onGoBack() {
      this.navCtrl.pop();
  }
}
