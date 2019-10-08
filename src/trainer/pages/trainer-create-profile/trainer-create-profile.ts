import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { NavController, AlertController} from 'ionic-angular';
import { TrainerClassDiscover } from '../../../trainer';
import { UserService } from '../../../user';
import { Time, WeekDay } from '@angular/common';

export class Profile {
  name: string;
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
    "experience": "",
    "specialization": "", 
  };

  constructor(private navCtrl: NavController,private alertCtrl: AlertController, private userService:UserService) {
  }

  ngOnInit() {
    //Setup the initial validation for the page
    this.newclassform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      experience: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      specialization: new FormControl('', [Validators.required, Validators.maxLength(250)]),

    });
  }
  
  updateProfile() {

  }

  /*
  onGoBack - Go back a screen.
  */
  onGoBack() {
      this.navCtrl.pop();
  }
}
