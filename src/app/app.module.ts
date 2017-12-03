import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccessDataService } from "../services/access-data/access.data.service";

// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicTabsPageModule } from "../pages/ionic-tabs/ionic-tabs.module";
import { IonicHomePageModule } from "../pages/ionic-home/ionic-home.module";
import { IonicFundsPageModule } from "../pages/ionic-funds/ionic-funds.module";
import { IonicAssetsPageModule } from "../pages/ionic-assets/ionic-assets.module";
import { IonicPersonPageModule } from "../pages/ionic-person/ionic-person.module";

@NgModule({
  declarations: [
    MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicTabsPageModule,
    IonicHomePageModule,
    IonicFundsPageModule,
    IonicAssetsPageModule,
    IonicPersonPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccessDataService
  ]
})
export class AppModule {}
