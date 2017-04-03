import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../providers/login'
import { HomePage } from '../home/home';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:Login) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.loginProvider.loginSuccessEventEmitter.subscribe(
      user => this.navCtrl.setRoot(HomePage,{
        user: user.uid
      }))
      this.loginProvider.loginFalhaEventEmitter.subscribe(error=>console.log(error))
  }
  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }

}
