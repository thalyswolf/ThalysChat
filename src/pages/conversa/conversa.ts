import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { Messages } from '../../providers/messages';
/*
  Generated class for the Conversa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conversa',
  templateUrl: 'conversa.html'
})
export class ConversaPage {
  usuario:string;
  amigo:string;
  id:any;
  mensagem:string;
  conversas: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public angFire:AngularFire, private msg:Messages) {
    this.usuario = navParams.get('user1');
    this.id = navParams.get('id');
    this.amigo = navParams.get('user2');
    console.log(this.usuario);
    this.conversas = angFire.database.list('/messages/'+this.usuario+'/conversas/'+this.amigo);
  }
  enviar(){
    this.msg.send(this.usuario, this.amigo, this.mensagem);
  }
  user(u){
    if(u == this.usuario){
      return true;
    }else{
      return false;
    }
  }
}
