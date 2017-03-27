
import { Component,NgZone } from '@angular/core';
import {Messages} from '../../providers/messages'
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username='';
  m='';
  message=[

  ];
  messages:FirebaseListObservable<any>;
user(user){
  if(user==this.username){
    return true
  }else{
    return false
  }
}
  constructor(public navCtrl: NavController, public sendM:Messages,public ngZone:NgZone, public angFire:AngularFire) {
    this.messages = angFire.database.list('/messages');
}
limpar(){
  this.sendM.save('e');
}
  sendMessage(){

    this.messages.push(this.message)
   //this.sendM.save(this.message);
  }
}
