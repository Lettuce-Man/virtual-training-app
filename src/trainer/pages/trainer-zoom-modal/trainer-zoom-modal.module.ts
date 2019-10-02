import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainerZoomModalPage } from './trainer-zoom-modal';

@NgModule({
  declarations: [
    TrainerZoomModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainerZoomModalPage),
  ],
  exports: [
    TrainerZoomModalPage
  ]
})
export class ZoomModalPageModule {}
