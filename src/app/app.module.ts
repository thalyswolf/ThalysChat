import {AdicionaContato} from "../providers/adiciona-contato";
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Messages} from "../providers/messages";
import { AngularFireModule} from 'angularfire2';
import { EnviarPage } from '../pages/enviar/enviar';
import { ConversaPage } from '../pages/conversa/conversa';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { AddPage } from '../pages/add/add';
import {Login} from "../providers/login";
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
    HomePage,
    EnviarPage,
    ConversaPage,
    LoginPage,
    RegistrarPage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EnviarPage,
    ConversaPage,
    LoginPage,
    RegistrarPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Messages,
    Login,
    AdicionaContato

  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
