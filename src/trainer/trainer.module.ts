import { NgModule } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';

import { TrainerClassDetails } from './pages/trainer-class-details/trainer-class-details';
import { TrainerClassDiscover } from './pages/trainer-class-discover/trainer-class-discover';
import { ClassesService } from './services/classes.service';
import { MyclassesService } from './services/myclasses.service';
import { ProfileDataService } from './services/profiledata.service';

//reusable nav menu, the menu contents are defined in the app.com
import { NavMenuComponent } from './nav/nav-menu-component'
//common components
import { ClassSummaryComponent } from './common/class-summary-component/class-summary-component';
import { CreateClass } from './pages/trainer-create-class/trainer-create-class';
import { TrainerMyProfile } from './pages/trainer-my-profile/trainer-my-profile';
import { CreateProfile } from './pages/trainer-create-profile/trainer-create-profile';
import { TrainerService } from './services/trainer.service';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
    ClassesService,
    MyclassesService,
    ProfileDataService,
    TrainerService
  ],
  declarations: [
     TrainerClassDetails,
     TrainerClassDiscover,
     TrainerMyProfile,
     CreateClass,
     CreateProfile,
     ClassSummaryComponent,
     NavMenuComponent
  ],
  entryComponents: [
    TrainerClassDetails,
    TrainerClassDiscover,
    TrainerMyProfile,
    CreateClass,
    CreateProfile
  ],
  exports: [
    TrainerClassDetails,
    TrainerClassDiscover,
    TrainerMyProfile,
    CreateClass,
    CreateProfile
  ]
})
export class TrainerModule { }
