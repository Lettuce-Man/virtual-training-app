import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { Signup } from '../signup/signup';
import { Signin } from '../signin/signin';
import { TrainerSignup } from '../trainersignup/trainersignup';

@Component({
  selector: 'accounts-landing',
  templateUrl: 'landing.html',
})
/*
Landing - Starting Page the user will see when opening the application.
*/
export class Landing {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  onGoToSignUp() {
	  this.navCtrl.push(Signup);
  }

  onGoToSignIn() {
  	this.navCtrl.push(Signin);
  }

  /*
  onGoTrainerSignup - Go to trainer signup page.
  */
  onGoTrainerSignup() {
    this.navCtrl.push(TrainerSignup);
  }
}
