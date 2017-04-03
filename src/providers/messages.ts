import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the Messages provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Messages {
  reference;
  constructor(public http: Http, public angFire:AngularFire) {
    console.log('Hello Messages Provider');
    this.initialize();
  }
  private initialize(){
   this.reference = firebase.database().ref();
  }

  dest(remetente, destino, mensagem){
    let ref = firebase.database().ref();
    return ref.child('messages').child(remetente).child('conversas').child(destino).push().set({
      de:remetente,
      para: destino,
      texto: mensagem
    });
  }
  send(remetente, destino, mensagem){
        let ref = firebase.database().ref();
        this.dest(remetente, destino, mensagem);
        return ref.child('messages').child(destino).child('conversas').child(remetente).push().set({
          de:remetente,
          para: destino,
          texto: mensagem
        });

  }
}
