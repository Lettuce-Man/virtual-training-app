import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { UserService } from './services/user.service';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
    UserService
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
  ]
})
export class UserModule { }
