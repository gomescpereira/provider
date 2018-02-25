import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prestador } from '../../models/provider';
import { PrestadoresProvider } from '../../providers/prestadores/prestadores';

/**
 * Generated class for the ProviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-provider',
  templateUrl: 'provider.html',
})
export class ProviderPage {
  item: any;
  provider: Prestador;
  messagePassword: string;
  constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
               public prestadorProvider : PrestadoresProvider
              ) 
  {
     this.provider= new Prestador();
     this.item = navParams.get("parametroReferenciaRecebido");
    
     this.provider.email = this.item['email']; 
     this.provider.lat = this.item['latitude'];
     this.provider.lng = this.item['longitude'];
    
       

  }

  ionViewDidLoad() {
    console.log(this.item);

  }

  cadastrar(provider){
   
    
    
    console.log(provider);
   
     
     
     this.prestadorProvider.Add(provider);

  }

}
