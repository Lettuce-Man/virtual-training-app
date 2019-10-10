import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassesService } from '../../services/classes.service';
import { MyclassesService } from '../../services/myclasses.service';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Session } from '../../../models/session';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import {UserService} from '../../../user';
import { TrainerClassDiscover } from '../trainer-class-discover/trainer-class-discover';

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
    this.equipmentStr = this.session.equipment;
  }

  onGoBack() {
    this.navCtrl.pop();
  }

	ngOnInit() {
  }
  
  removeClass() {
    const areYouSure = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to cancel this class? Clicking Yes will return you to the Your Classes page.',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.classesservice.removeClass(this.session);
            this.navCtrl.setRoot(TrainerClassDiscover);
          }
        },
        {
          text: 'No',
          handler: () => {
          }
        }
      ]
    });
    areYouSure.present();
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
