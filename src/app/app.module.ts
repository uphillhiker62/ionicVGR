import { UserProfilePage } from './../pages/user-profile/user-profile';
import { SearchPage } from './../pages/search/search';
import { PlatformsPage } from './../pages/platforms/platforms';
import { HelpPage } from './../pages/help/help';
import { GameReviewsPage } from './../pages/game-reviews/game-reviews';
import { GamePicsPage } from './../pages/game-pics/game-pics';
import { GameDetailsPage } from './../pages/game-details/game-details';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactUsPage,
    GameDetailsPage,
    GamePicsPage,
    GameReviewsPage,
    HelpPage,
    LoginPage,
    PlatformsPage,
    SearchPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactUsPage,
    GameDetailsPage,
    GamePicsPage,
    GameReviewsPage,
    HelpPage,
    LoginPage,
    PlatformsPage,
    SearchPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
