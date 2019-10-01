import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController} from 'ionic-angular';
import { TraineeClassDiscover } from '../../../trainee';
import { UserService } from '../../../user';
import { Signin } from '../signin/signin';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

export class TrainerSignUpModel {
  name: string;
  email: string;
  password: string;
  passwordConfirm:string;
  bio: string;
  prevExp: string;
  qualiCert: string;
}

@Component({
  selector: 'account-signup',
  templateUrl: 'trainersignup.html',
})
/*
TrainerSignup - Page that does the new trainer creation.
*/
export class TrainerSignup implements OnInit{

  public imageURI: any;
  public imageFileName: any;
  public signupform: FormGroup;
  public userData: TrainerSignUpModel = { "name": "", "password": "","passwordConfirm": "", "email": "" , "bio": "", "prevExp": "", "qualiCert": ""};

  constructor(private navCtrl: NavController,private alertCtrl: AlertController, private userService:UserService) {
  }

  ngOnInit() {
    //Setup the initial validation for the page
    let PASSPATTERN = /^(?=.*\d)(?=.*[A-Z]).{0,50}$/;//all alpha numeric characters
    this.signupform = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern(PASSPATTERN), Validators.minLength(8), Validators.maxLength(50)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.pattern(PASSPATTERN)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      bio: new FormControl('', [Validators.required, Validators.maxLength(500)]),
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
  */
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

    this.userService.signUp(this.userData.name, this.userData.email, this.userData.password)
      .then(user => {
        this.navCtrl.setRoot(TraineeClassDiscover);
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

//TODO: Add upload method

  /*
  onGoBack - Go back a screen.
  */
  onGoBack() {
      this.navCtrl.pop();
  }
}
