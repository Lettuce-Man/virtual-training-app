import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { NavController, AlertController} from 'ionic-angular';
import { TrainerClassDiscover } from '../../../trainer';
import { UserService } from '../../../user';
import { Time, WeekDay } from '@angular/common';
import { Session } from '../../../models/session';
import { ClassesService } from '../../services/classes.service';
import { Trainer } from '../../../models/trainer';
import { Target } from '../../../models/target';

export class RawClass {
  id: number;
  title: string;
  description: string;
  equipment: string;
  arms: boolean;
  chest: boolean;
  back: boolean;
  glutes: boolean;
  core: boolean;
  calves: boolean;
  legs: boolean;
  shoulders: boolean;
  calories: string;
  startdate: string; //TODO: change to date object
  enddate: string;
  starttime: string; //TODO: change to time object (ideally)
  endtime: string;
  level: string;
  price: string;
  days: string;
} 

@Component({
  selector: 'account-signup',
  templateUrl: 'trainer-create-class.html',
})
/*
CreateClass - Page that creates a new class.
*/
export class CreateClass implements OnInit{

  public trainer: Trainer;
  public targets: Target[];
  public newClass: Session;
  public value: String;

  public imageURI: any;
  public imageFileName: any;
  public newclassform: FormGroup;
  public classData: RawClass = { 
    "id": 0,                  
    "title": "Get Swole with Nathan",
    "description": "Get swole!", 
    "equipment": "Weights and such",
    "arms": false,
    "chest": false,
    "back": false,
    "glutes": false,
    "core": false,
    "calves": false,
    "legs": false,
    "shoulders": false,
    "calories": "90",
    "startdate": "March 20th, 2020",
    "enddate": "March 20th, 2021",
    "starttime": "8AM",
    "endtime": "5PM",
    "level": "3",
    "price": "$29",
    "days": "Mon, Tues, Thurs",
  };

  constructor(private navCtrl: NavController,private alertCtrl: AlertController, private userService:UserService, private classesService:ClassesService) {
  }

  ngOnInit() {
    //Setup the initial validation for the page
    this.newclassform = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      equipment: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      calories: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      //arms: new FormControl('',[Validators.required]),
      //chest: new FormControl('', [Validators.required]),
      //back: new FormControl('', [Validators.required]),
      //glutes: new FormControl('', [Validators.required]),
      //core: new FormControl('', [Validators.required]),
      //calves: new FormControl('', [Validators.required]),
      //legs: new FormControl('', [Validators.required]),
      //shoulders: new FormControl('', [Validators.required]),
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
  isChecked - helper function to determine if options have been checked
  */
  isChecked(value) {
    for(let i = 0; i < value.length; i++) {
      if (value[i] == 'arms') {
        this.classData.arms = true;
      }
      if (value[i] == 'chest') {
        this.classData.chest = true;
      }
      if (value[i] == 'back') {
        this.classData.back = true;
      }
      if (value[i] == 'glutes') {
        this.classData.glutes = true;
      }
      if (value[i] == 'core') {
        this.classData.core = true;
      }
      if (value[i] == 'calves') {
        this.classData.calves = true;
      }
      if (value[i] == 'legs') {
        this.classData.legs = true;
      }
      if (value[i] == 'shoulders') {
        this.classData.shoulders = true;
      }
    }
  }

  /*
  Create class - Creates a class and adds it to array via user service.
  */
  createClass() {
    this.classesService.addClass(
      this.classData.id, 
      this.classData.title, 
      this.classData.description,
      this.classData.equipment, 
      this.classData.arms,
      this.classData.chest,
      this.classData.back,
      this.classData.glutes,
      this.classData.core,
      this.classData.calves,
      this.classData.legs,
      this.classData.shoulders,
      +this.classData.calories,
      this.classData.startdate,
      this.classData.enddate,
      this.classData.starttime,
      this.classData.endtime,
      +this.classData.level,
      this.classData.price,
      this.classData.days)
      .then(classCreate => {
        this.navCtrl.setRoot(TrainerClassDiscover);
      })
      .catch(err => {
        this.alertCtrl.create({
          title: 'Class Information',
          subTitle:err,
          buttons: [{
              text:'Dismiss'
          }]
        }).present();
      });
    

  }
  

  /*
  onGoBack - Go back a screen.
  */
  onGoBack() {
      this.navCtrl.pop();
  }
}
