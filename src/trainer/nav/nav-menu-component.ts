import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateClass } from '../pages/trainer-create-class/trainer-create-class';
import { CreateProfile } from '../pages/trainer-create-profile/trainer-create-profile';

@Component({
  selector: 'nav-menu-component',
  templateUrl: 'nav-menu-component.html',
})
export class NavMenuComponent {
  //input title parent
  @Input() public title: string;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }

  ngOnInit() {

  }

  onCreateClass() {
	  this.navCtrl.push(CreateClass);
  }

  onEditProfile() {
    this.navCtrl.push(CreateProfile)
  }

}
