import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WalkerPage } from '../pages/walker/walker';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SignInPage } from '../pages/sign-in/sign-in'
import { BookWalkPage } from '../pages/book-walk/book-walk';
import { CardPage } from '../pages/card/card'
import { PetPage } from '../pages/pet/pet'
import { WalkFeedPage } from '../pages/walk-feed/walk-feed'
import { TrackWalkPage } from '../pages/track-walk/track-walk'
import { WalksPage } from '../pages/walks/walks'
import { ReportPage } from '../pages/report/report'
import { SettingsPage } from '../pages/settings/settings'
import { AddressPage } from '../pages/address/address'
import { NotificationsPopOverPage } from '../pages/notifications-pop-over/notifications-pop-over'
import { PromotionComponent } from '../components/promotion/promotion'
import { VerifyPage } from '../pages/verify/verify'
import { RegisterPage } from '../pages/register/register'
import { RateWalkPage } from '../pages/rate-walk/rate-walk'
import { EditprofilePage } from '../pages/editprofile/editprofile'
import { PetsPage } from '../pages/pets/pets'
import { NotificationAlertPage } from '../pages/notifications-alert/notifications-alert'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing'
import { GoogleMaps } from '@ionic-native/google-maps'
import { GooglePlus } from '@ionic-native/google-plus'
import { VideoPlayer } from '@ionic-native/video-player'
import { StreamingMedia } from '@ionic-native/streaming-media'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation'
import { Facebook } from '@ionic-native/facebook'
import { SelectMorePetsPage } from '../pages/select-more-pets/select-more-pets'

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage'

import { Ionic2RatingModule } from 'ionic2-rating'

import { Stripe } from '@ionic-native/stripe'
//import { CardIO } from '@ionic-native/card-io'

import { ApiServiceProvider } from '../providers/api-service/api-service'

import * as Constants from '../providers/config'

const API_URL = Constants.API_URL;

//import { SocketIoModule, SocketIoConfig } from 'ng-socket-io'
import { FireProvider } from '../providers/fire/fire';
import { ClientProvider } from '../providers/client/client';
const socketConfig = { url : API_URL , options : {}}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    WalkerPage,
    LoginPage,
    BookWalkPage,
    SignUpPage,
    SignInPage,
    CardPage,
    PetPage,
    WalkFeedPage,
    TrackWalkPage,
    WalksPage,
    ReportPage,
    SettingsPage,
    AddressPage,
    NotificationsPopOverPage,
    VerifyPage,
    RegisterPage,
    RateWalkPage,
	EditprofilePage,
  PetsPage,
  NotificationAlertPage,
  SelectMorePetsPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
        mode : 'md'
        
    }),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
    //SocketIoModule.forRoot(socketConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    WalkerPage,
    LoginPage,
    BookWalkPage,
    SignUpPage,
    SignInPage,
    CardPage,
    PetPage,
    WalkFeedPage,
    TrackWalkPage,
    WalksPage,
    ReportPage,
    SettingsPage,
    AddressPage,
    NotificationsPopOverPage,
    VerifyPage,
    RegisterPage,
    RateWalkPage,
	EditprofilePage,
  PetsPage,
  NotificationAlertPage,
  SelectMorePetsPage
  ],
  providers: [
    GoogleMaps,
    GooglePlus,
    VideoPlayer,
    StreamingMedia,
    Camera,
    Stripe,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    FireProvider,
    Facebook,
    ClientProvider,
    SocialSharing
  ]
})
export class AppModule {}
