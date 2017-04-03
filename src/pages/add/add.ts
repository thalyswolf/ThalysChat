import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AdicionaContato} from '../../providers/adiciona-contato';
/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public adcCont:AdicionaContato) {}
  contato = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  add(){
    this.adcCont.add(this.contato);
  }

}
