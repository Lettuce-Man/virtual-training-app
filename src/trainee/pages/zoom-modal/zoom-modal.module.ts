import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoomModalPage } from './zoom-modal';

@NgModule({
  declarations: [
    ZoomModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoomModalPage),
  ],
  exports: [
    ZoomModalPage
  ]
})
export class ZoomModalPageModule {}
