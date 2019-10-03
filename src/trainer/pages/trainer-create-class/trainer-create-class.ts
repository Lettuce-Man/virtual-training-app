import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { NavController, AlertController} from 'ionic-angular';
import { TrainerClassDiscover } from '../../../trainer';
import { UserService } from '../../../user';
import { Time, WeekDay } from '@angular/common';

export class NewClass {
  name: string;
  description: string;
  equipment: string;
  //bodywork: string;
  calories: number;
  startdate: string; //TODO: change to date object
  enddate: string;
  starttime: number; //TODO: change to time object (ideally)
  endtime: number;
  level: number;
  price: number;
  days: number;
}

@Component({
  selector: 'account-signup',
  templateUrl: 'trainer-create-class.html',
})
/*
TrainerSignup - Page that does the new trainer creation.
*/
export class CreateClass implements OnInit{

  public imageURI: any;
  public imageFileName: any;
  public newclassform: FormGroup;
  public classData: NewClass = { 
    "name": "", 
    "description": "",
    "equipment": "", 
    //"bodywork": "" , //TODO: Reimplement once validation is confirmed possible
    "calories": 0, 
    "startdate": "", 
    "enddate": "",
    "starttime": 0,
    "endtime": 0,
    "level": 0,
    "price": 0,
    "days": 0,
  };

  constructor(private navCtrl: NavController,private alertCtrl: AlertController, private userService:UserService) {
  }

  ngOnInit() {
    //Setup the initial validation for the page
    this.newclassform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      equipment: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      //bodywork: new FormControl('', [Validators.required]),
      calories: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required]),
      starttime: new FormControl('', [Validators.required]),
      endtime: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      days: new FormControl('', [Validators.required]),

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
  Create class - Validate and call signup on the user service.
  */
  

//TODO: Add create class method

  /*
  onGoBack - Go back a screen.
  */
  onGoBack() {
      this.navCtrl.pop();
  }
}
