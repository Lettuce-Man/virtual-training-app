import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController, MenuController } from 'ionic-angular'
import { TraineeMyClass, TraineeClassDiscover} from '../../../trainee';
import {MyclassesService} from '../../../trainer/services/myclasses.service';
import {UserService} from '../../../user';
import { TrainerClassDiscover } from '../../../trainer';
import { CognitoServiceProvider } from '../../../providers/cognito-service/cognito-service';

@Component({
  selector: 'accounts-signin',
  templateUrl: 'signin.html'
})
/*
Signin - Page to log a user into the application
*/
export class Signin implements OnInit {
  signupform: FormGroup;
  userData = { 
    "password": "", 
    "email": "" , 
    "type": false
  };

  constructor(public CognitoService: CognitoServiceProvider, public navCtrl: NavController, public menuCtrl: MenuController, private userService:UserService, private alertCtrl: AlertController, private myclassesService:MyclassesService) {
  }

  ngOnInit() {
    this.userService.signOut();

    this.signupform = new FormGroup({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      trainerCheck: new FormControl('', [Validators.required])
    });
  }

  onGoBack() {
    this.navCtrl.pop();
  }
/*
  login() {
    this.userService.signIn(this.userData.email, this.userData.password, this.userData.type)
      .then(user => {
        //Business logic. If the user doesn't have any classes registered
        //Then send them to the discover to start. Otherwise make them land
        //on their my classes page
        if(this.userData.type == false) {
          if(this.myclassesService.getMyclasses().length > 0){
            this.navCtrl.setRoot(TraineeMyClass,  { 'user': user });
            this.menuCtrl.enable(true, 'trainee');
            this.menuCtrl.enable(false, 'trainer');
          }
          else {
            this.navCtrl.setRoot(TraineeClassDiscover,  { 'user': user });
            this.menuCtrl.enable(true, 'trainee');
            this.menuCtrl.enable(false, 'trainer');
          }
        }
        else {
          this.navCtrl.setRoot(TrainerClassDiscover);
          this.menuCtrl.enable(true, 'trainer');
          this.menuCtrl.enable(false, 'trainee');
          
        }
      })
      .catch(err => {
          this.alertCtrl.create({
            title: 'Sign In Error',
            subTitle:err,
            buttons: [{
                text:'Dismiss'
            }]
          }).present();
      });
  }
  */

 login() {
   if(this.userData.type == false) {
    this.CognitoService.authenticate(this.userData.email, this.userData.password)
    .then(res =>{
      console.log(res);
      this.navCtrl.setRoot(TraineeClassDiscover);
      this.menuCtrl.enable(true, 'trainee');
      this.menuCtrl.enable(false, 'trainer');
    }, err =>{
      console.log(err);
      this.alertCtrl.create({
        title: 'Sign In Error',
        subTitle:'Please check that your email and password are correct. If you are a trainer, make sure the "I am a trainer" box is checked.',
        buttons: [{
            text:'Dismiss'
        }]
      }).present();
    });
  }
  if(this.userData.type == true) {
    this.CognitoService.authenticateTrainer(this.userData.email, this.userData.password)
    .then(res =>{
      console.log(res);
      this.navCtrl.setRoot(TrainerClassDiscover);
      this.menuCtrl.enable(true, 'trainer');
      this.menuCtrl.enable(false, 'trainee');
    }, err =>{
      console.log(err);
      this.alertCtrl.create({
        title: 'Sign In Error',
        subTitle:'Please check that your email and password are correct.',
        buttons: [{
            text:'Dismiss'
        }]
      }).present();
    });
  }
}

}
