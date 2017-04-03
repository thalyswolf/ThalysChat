import { Injectable, EventEmitter, NgZone  } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';


/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Login {
  currentUser:any;
  autenticado:boolean;
  loginSuccessEventEmitter:EventEmitter<any>;
  loginFalhaEventEmitter:EventEmitter<any>;
  logoutEventEmitter:EventEmitter<any>;
  constructor(public http: Http, public ngZone: NgZone) {
    this.loginSuccessEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.logoutEventEmitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(usuario =>{
      this.callbackStateChange(usuario);
    })
  }
  private callbackStateChange(usuario){
    this.ngZone.run( () =>{
      if(usuario==null){
        this.currentUser = null;
        this.autenticado = false;
      }else{
        this.currentUser = usuario;
        this.autenticado = true;
      }
    })
  }
  loginComFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(result =>this.callbackSuccessLogin(result)).catch(error => this.callbackFailLogin(error))
  }

  private callbackSuccessLogin(response){
    this.loginSuccessEventEmitter.emit(response.user);
    
  }
  private callbackFailLogin(error){
    this.loginFalhaEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial : error.credencial, senha : error.senha});
  }
  sair(){
    firebase.auth().signOut().then(resultado => this.logoutEventEmitter.emit(true)).catch(
      error => this.callbackFailLogin(error)
    )
  }
}
