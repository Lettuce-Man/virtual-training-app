import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController, MenuController } from 'ionic-angular';
import { TraineeClassDiscover } from '../../../trainee';
import {UserService} from '../../../user';
import { Signin } from '../signin/signin';

export class SignUpModel {
  name: string;
  email: string;
  password: string;
  passwordConfirm:string;
  type: false;
}

@Component({
  selector: 'account-signup',
  templateUrl: 'signup.html',
})
/*
Signup - Page that does the new user creation.
*/
export class Signup implements OnInit{

  public signupform: FormGroup;
  public userData: SignUpModel = { "name": "", "password": "","passwordConfirm": "", "email": "", "type": false};

  constructor(private navCtrl: NavController,private alertCtrl: AlertController, private userService:UserService, private menuCtrl: MenuController) {
  }

  ngOnInit() {
    //Setup the initial validation for the page
    let PASSPATTERN = /^(?=.*\d)(?=.*[A-Z]).{0,50}$/;//all alpha numeric characters
    this.signupform = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern(PASSPATTERN), Validators.minLength(8), Validators.maxLength(50)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.pattern(PASSPATTERN)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  /*
  hasNumber - helper function to dynamically find if a number is in a string.
  */
  hasNumber(testString) {
    return /\d/.test(testString);
  }
  /*
  hasNumber - helper function to dynamically find if an uppercase is in a string.
  */
  hasUppercase(testString){
    return /[A-Z]/.test(testString);
  }

  /*
  signup - Validate and call signup on the user service.
  
  signup() {
    if(this.signupform.invalid === true){
      this.alertCtrl.create({
        title: 'Error',
        subTitle:'Please make sure all inputs are correct.',
        buttons: [{
            text:'Dismiss'
        }]
      }).present();
      return;
    }
    if(this.userData.password !== this.userData.passwordConfirm){
      this.alertCtrl.create({
        title: 'Passwords do not match',
        subTitle:'The passwords entered do not match!',
        buttons: [{
            text:'Dismiss'
        }]
      }).present();
      return;
    }

    this.userService.signUp(this.userData.name, this.userData.email, this.userData.password, this.userData.type)
      .then(user => {
        this.navCtrl.setRoot(TraineeClassDiscover);
        this.menuCtrl.enable(true, 'trainee');
        this.menuCtrl.enable(false, 'trainer');
      })
      .catch(err => {
          this.alertCtrl.create({
            title: 'User Information',
            subTitle:err,
            buttons: [{
                text:'Dismiss'
            }]
          }).present();
      });
  }
  */

  

  /*
  onGoBack - Go back a screen.
  */
  onGoBack() {
      this.navCtrl.pop();
  }
}
