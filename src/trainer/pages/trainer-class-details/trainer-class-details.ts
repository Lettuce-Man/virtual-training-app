import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrainerMyClass } from "../trainer-my-class/trainer-my-class";
import { ClassesService } from '../../services/classes.service';
import { MyclassesService } from '../../services/myclasses.service';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Session } from '../../../models/session';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import {UserService} from '../../../user';

@Component({
  selector: 'trainer-class-details',
  templateUrl: 'trainer-class-details.html',
})
export class TrainerClassDetails {
	public session: Session;
  public isUserRegistered:boolean = false;
  public equipmentStr:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private classesservice: ClassesService, private myclassesService: MyclassesService, private alertCtrl: AlertController, private toastCtrl: ToastController,private modal: ModalController, private userService:UserService) {
    let id = this.navParams.data;
    this.session = this.classesservice.getClass(id);
    this.isUserRegistered = this.myclassesService.isRegistered(this.session.id);

    //TODO this is a hack to add more properties to the model and can be removed once a proper model is pulled from an API
    //Can also just add these to every class in the data/class-data.ts as well
    for (let i = 0; i < this.session.equipment.length; i++) {
      if (i === this.session.equipment.length - 1) {
        this.equipmentStr += this.session.equipment[i];
      }
      else {
        this.equipmentStr += this.session.equipment[i] + ", ";
      }
    }
  }

  onGoBack() {
    this.navCtrl.pop();
  }

	ngOnInit() {
	}

  register() {
    let classid = this.navParams.data;
    let userId = 123;//TODO: Mocked out for now.
    this.classesservice.register(userId,classid);
    this.isUserRegistered = true;
  }
  unregister() {
    this.myclassesService.removeMyclassesById(this.session.id);
    this.isUserRegistered = false;
  }

  showConfirmRegister() {
    const confirm = this.alertCtrl.create({
      title: 'Confirm Class Registration',
      message: 'Are you sure you want to register?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel registration');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.register();
            this.presentToast();

          }
        }
      ]
    });
    confirm.present();
  }

  presentToast() {
    let duration: number = 7000;
    let closedByTimeout: boolean = false;

     const toast = this.toastCtrl.create({
       message: 'Congratulations! You are registered',
       position: "top",
       showCloseButton: true,
       closeButtonText: "My Sessions",
       dismissOnPageChange: true,
       cssClass: "custom-toast"
     });

    let timeOutHandler = setTimeout(() => { closedByTimeout = true; toast.dismiss(); }, duration);


    toast.onDidDismiss(() => {
      if (closedByTimeout) return;

      this.navCtrl.setRoot(TrainerMyClass)
      clearTimeout(timeOutHandler);
    });


    toast.present();
  }
  private openZoom(url:string){
    window.open(url,'_system', 'location=yes');
  }
  openZoomModal() {
    if(this.userService.getSettingZoomNotification() === false){
      let myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        cssClass:"model-zoom"
      };

      let zoomModal: Modal = this.modal.create('ZoomModalPage', { zoomLink: this.session.zoom }, myModalOptions);

      zoomModal.present();
    }
    else {
      this.openZoom(this.session.zoom);
    }

  }


}
