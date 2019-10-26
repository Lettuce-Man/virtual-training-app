import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FormsModule } from '@angular/forms'
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';

import { UserModule } from '../user';
import { TraineeModule} from '../trainee';
import { AccountsModule } from '../accounts';
import { TrainerModule } from '../trainer';
import { CognitoServiceProvider } from '../providers/cognito-service/cognito-service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    UserModule,
    TraineeModule,
    AccountsModule,
    TrainerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File,
    CognitoServiceProvider,
    HttpClientModule,
    EmailComposer
    
  ]
})
export class AppModule {}
