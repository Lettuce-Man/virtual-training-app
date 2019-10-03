import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular'
import { TraineeMyClass, TraineeClassDiscover, MyclassesService} from '../../../trainee';
import {UserService} from '../../../user';
import { TrainerClassDiscover } from '../../../trainer';

@Component({
  selector: 'accounts-signin',
  templateUrl: 'signin.html'
})
/*
Signin - Page to log a user into the application
*/
export class Signin implements OnInit {
  signupform: FormGroup;

  //TODO: This is not taking data from the form, it is the data that gets put in the form
  userData = { "password": "Swoleman1", "email": "stlstrengthacademy@gmail.com" , "type": 1};

  constructor(public navCtrl: NavController,private userService:UserService, private alertCtrl: AlertController, private myclassesService:MyclassesService) {
  }

  ngOnInit() {
    this.userService.signOut();

    this.signupform = new FormGroup({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  login() {
    this.userService.signIn(this.userData.email, this.userData.password, this.userData.type)
      .then(user => {
        //Business logic. If the user doesn't have any classes registered
        //Then send them to the discover to start. Otherwise make them land
        //on their my classes page
        if(this.userData.type == 0) {
          if(this.myclassesService.getMyclasses().length > 0){
            this.navCtrl.setRoot(TraineeMyClass,  { 'user': user });
          }
          else {
            this.navCtrl.setRoot(TraineeClassDiscover,  { 'user': user });
          }
        }
        else {
          this.navCtrl.setRoot(TrainerClassDiscover);
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

}
