import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, MenuController, App } from 'ionic-angular';
import { TraineeClassDiscover, TraineeMyClass } from '../trainee';
import {Landing} from '../accounts';
import {UserService} from '../user';

@Component({
  templateUrl: 'app.component.html'
})
/*
MyApp - main component that starts the application.
*/
export class MyApp {
  pageMySessions = TraineeMyClass;
  pageDiscoverClass = TraineeClassDiscover;
  currentPage = null;
  rootPage;
  launchPage = Landing;

  @ViewChild('nav') nav: NavController;


  constructor(platform: Platform,
    statusBar: StatusBar,
    public appCtrl: App,
    public menuCtrl: MenuController,
    private userService:UserService,
    splashScreen: SplashScreen
    )
    {
      this.rootPage = Landing;
    }

    /*
    logoutClicked - signs out of the application
    */
    logoutClicked() {
      this.userService.signOut();
      // reset pages
      this.menuCtrl.close();
      var nav = this.appCtrl.getRootNav();
      nav.setRoot(Landing);
    }
    /*
    isCurrentPage - used by the nav to see if we are on the current page. Adds a
    class selector for visual indication
    */
    public isCurrentPage(page){
      //if(this.currentPage == null) this.currentPage = this.nav.getActive();
      let current = this.nav.getActive();
      if(current && current.instance && current.instance instanceof page){
        return 'selected';
      }
      return 'unselected';
    }
    //openPage - used primarily by the nav in app.component.html
    public openPage(page){
      this.nav.setRoot(page);
      this.menuCtrl.close();
    }

}
