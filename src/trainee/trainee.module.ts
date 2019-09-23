import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TraineeClassDetails } from './pages/trainee-class-details/trainee-class-details';
import { TraineeClassDiscover } from './pages/trainee-class-discover/trainee-class-discover';
import { TraineeMyClass }  from './pages/trainee-my-class/trainee-my-class';
import { ClassesService } from './services/classes.service';
import { MyclassesService } from './services/myclasses.service';

//reusable nav menu, the menu contents are defined in the app.com
import { NavMenuComponent } from './nav/nav-menu-component'
//common components
import { ClassSummaryComponent } from './common/class-summary-component/class-summary-component';

@NgModule({
  imports: [
    IonicModule
  ],
  providers: [
    ClassesService,
    MyclassesService
  ],
  declarations: [
     TraineeClassDetails,
     TraineeClassDiscover,
     TraineeMyClass,
     ClassSummaryComponent,
     NavMenuComponent
  ],
  entryComponents: [
    TraineeClassDetails,
    TraineeClassDiscover,
    TraineeMyClass
  ],
  exports: [
    TraineeClassDetails,
    TraineeClassDiscover,
    TraineeMyClass
  ]
})
export class TraineeModule { }
