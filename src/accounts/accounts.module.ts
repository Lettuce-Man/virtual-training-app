import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Landing } from './pages/landing/landing';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { TrainerSignup } from './pages/trainersignup/trainersignup';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
  ],
  declarations: [
    Landing,
    Signin,
    Signup,
    TrainerSignup
  ],
  entryComponents: [
    Landing,
    Signin,
    Signup,
    TrainerSignup
  ],
  exports: [
    Landing
  ]
})
export class AccountsModule { }
