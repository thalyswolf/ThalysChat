import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Messages} from "../providers/messages";
import { AngularFireModule} from 'angularfire2';
const firebaseConfig = {
    apiKey: "AIzaSyCNj_N2CmXCsoO9QjoHMeGCGFt-Gyon-FA",
    authDomain: "thalyschat.firebaseapp.com",
    databaseURL: "https://thalyschat.firebaseio.com",
    storageBucket: "thalyschat.appspot.com",
    messagingSenderId: "1008725386417"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Messages

  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
