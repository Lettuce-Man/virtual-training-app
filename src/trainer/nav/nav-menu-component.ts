import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CreateClass } from '../pages/trainer-create-class/trainer-create-class';
import { CreateProfile } from '../pages/trainer-create-profile/trainer-create-profile';
import { ProfileDataService } from '../services/profiledata.service';

@Component({
  selector: 'nav-menu-component',
  templateUrl: 'nav-menu-component.html',
})
export class NavMenuComponent {
  //input title parent
  @Input() public title: string;

  constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController, public profileData: ProfileDataService) {
  }

  ngOnInit() {

  }

  onCreateClass() {
    if(this.profileData.isProfileCreated() == true) {
      this.navCtrl.push(CreateClass);
    } else {
      this.showNoProfile();
    }
  }

  onEditProfile() {
    this.navCtrl.push(CreateProfile)
  }

  showNoProfile() {
    const noProfile = this.alertCtrl.create({
      title: 'No Profile Created',
      message: 'Before you create your first class, please customize your profile by clicking "Edit Profile"',
      buttons: [
        {
          text: 'Not now',
          handler: () => {
            console.log('Cancel profile creation');
          }
        },
        {
          text: 'Edit Profile',
          handler: () => {
            this.onEditProfile();
          }
        }
      ]
    });
    noProfile.present();
  }

}
