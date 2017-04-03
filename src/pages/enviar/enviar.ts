import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Messages} from '../../providers/messages'
/*
  Generated class for the Enviar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enviar',
  templateUrl: 'enviar.html'
})
export class EnviarPage {
  de = '';
  para = '';
  mensagem = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private messages:Messages) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnviarPage');
  }

  enviar(){
    this.messages.send(this.de, this.para, this.mensagem);
  }
}
