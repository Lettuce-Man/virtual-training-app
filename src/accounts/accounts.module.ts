import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Landing } from './pages/landing/landing';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
  ],
  declarations: [
    Landing,
    Signin,
    Signup
  ],
  entryComponents: [
    Landing,
    Signin,
    Signup
  ],
  exports: [
    Landing
  ]
})
export class AccountsModule { }
