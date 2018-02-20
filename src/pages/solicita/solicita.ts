import { User } from './../../models/user';

import { Solicitante } from './../../models/provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Guest } from '../../models/guest';
import {AngularFireAuth } from "angularfire2/auth";


/**
 * Generated class for the SolicitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()




@Component({
  selector: 'page-solicita',
  templateUrl: 'solicita.html',
})

export class SolicitaPage {
  
  public item: any;
  public nome: string;
  public tecnico:Guest;
  user = {} as User;

  constructor(public navCtrl: NavController, public NavParams: NavParams,
    private ofAuth: AngularFireAuth,private toast: ToastController){
   this.item = NavParams.get("parametroReferenciaEnviado");
   this.tecnico = new Guest();
  }

  ionViewDidLoad() { 
    this.ofAuth.authState.subscribe(data =>  {
      if(data && data.email && data.uid){
      this.toast.create({
        message: 'Welcome to APP_Name - '+ data.email,
        duration: 3000
       
      }).present();
      this.user.email = data.email;
      console.log('nome:'+data.email);
    } 
    else {
     console.log('Erro')
    }
  })
    this.tecnico.nome = this.item['nome'];

    this.tecnico.email = this.item['email'];

   // this.tecnico.cliente.email = this.user.email;

    this.tecnico.latitude = this.item['Lat'];

    this.tecnico.latitude = this.item['Lng'];
    
   
    console.log(this.item['nome']);
  }
}



