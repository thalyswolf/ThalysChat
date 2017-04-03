
import { Component,NgZone } from '@angular/core';
import {Messages} from '../../providers/messages'
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { EnviarPage } from '../enviar/enviar';
import { ConversaPage } from '../conversa/conversa';
import { AddPage } from '../add/add';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario='Bilbo';
  id;
  data;
  contatos: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public sendM:Messages,public ngZone:NgZone, public angFire:AngularFire, navParams: NavParams) {
    this.ionViewDidLoad();
    this.id = navParams.get('user');

}
enviarMensagem(){
  this.navCtrl.push(EnviarPage)
}
ionViewDidLoad() {
  console.log('ionViewDidLoad EnviarPage');
  this.contatos = this.angFire.database.list('/contatos');

}

verContato(contato){
  this.navCtrl.push(ConversaPage,
    {
        id: this.id,
        user1: this.usuario,
        user2: contato
      })
}
adicionar(){
  this.navCtrl.push(AddPage)
}



}
