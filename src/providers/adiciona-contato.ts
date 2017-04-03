import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the AdicionaContato provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AdicionaContato {

  constructor(public http: Http) {
    console.log('Hello AdicionaContato Provider');
  }
  add(contato){
        let ref = firebase.database().ref();
        return ref.child('contatos').push().set({
          id: contato.id,
          nome: contato.nome
        });

  }

}
