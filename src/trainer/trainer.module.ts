import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TrainerClassDetails } from './pages/trainer-class-details/trainer-class-details';
import { TrainerClassDiscover } from './pages/trainer-class-discover/trainer-class-discover';
import { TrainerMyClass }  from './pages/trainer-my-class/trainer-my-class';
import { ClassesService } from './services/classes.service';
import { MyclassesService } from './services/myclasses.service';

//reusable nav menu, the menu contents are defined in the app.com
import { NavMenuComponent } from './nav/nav-menu-component'
//common components
import { ClassSummaryComponent } from './common/class-summary-component/class-summary-component';
import { CreateClass } from './pages/trainer-create-class/trainer-create-class';

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
     TrainerMyClass,
     CreateClass,
     ClassSummaryComponent,
     NavMenuComponent
  ],
  entryComponents: [
    TrainerClassDetails,
    TrainerClassDiscover,
    TrainerMyClass,
    CreateClass
  ],
  exports: [
    TrainerClassDetails,
    TrainerClassDiscover,
    TrainerMyClass,
    CreateClass
  ]
})
export class TrainerModule { }
