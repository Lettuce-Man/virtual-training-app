import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import {UserService} from '../../../user';
/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-page',
  templateUrl: 'trainer-zoom-modal.html',
})

export class TrainerZoomModalPage {
  private zoomLink:string;
  public nofity:boolean;

  constructor(private navParams: NavParams, private view: ViewController, private userService:UserService) {
    this.nofity = false;
  }

  public updateNotify() {
    this.nofity = !this.nofity;
    this.userService.updateSettingZoomNotification(this.nofity);
  }

  public ionViewWillLoad() {
    this.zoomLink = this.navParams.get('zoomLink');
  }

  public cancel() {
    this.view.dismiss();
  }

  private openZoom(url:string){
    window.open(url,'_system', 'location=yes');
  }

  public continue(){
    this.openZoom(this.zoomLink);
    this.view.dismiss();
  }


}
