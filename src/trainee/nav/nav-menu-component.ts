import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

}
