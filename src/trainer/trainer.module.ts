import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TrainerClassDetails } from './pages/trainer-class-details/trainer-class-details';
import { TrainerClassDiscover } from './pages/trainer-class-discover/trainer-class-discover';
import { ClassesService } from './services/classes.service';
import { MyclassesService } from './services/myclasses.service';

//reusable nav menu, the menu contents are defined in the app.com
import { NavMenuComponent } from './nav/nav-menu-component'
//common components
import { ClassSummaryComponent } from './common/class-summary-component/class-summary-component';
import { CreateClass } from './pages/trainer-create-class/trainer-create-class';
import { TrainerMyProfile } from './pages/trainer-my-profile/trainer-my-profile';
import { CreateProfile } from './pages/trainer-create-profile/trainer-create-profile';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
    ClassesService,
    MyclassesService
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
