import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrestadoresProvider } from '../../providers/prestadores/prestadores';
import 'rxjs/add/operator/map';
import { SolicitaPage } from '../solicita/solicita';

/**
 * Generated class for the PrestadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prestador',
  templateUrl: 'prestador.html',
  providers: [
    PrestadoresProvider 
  ]
})
export class PrestadorPage {

  public lista = new Array<any>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public prestadorProvider : PrestadoresProvider) {
  }

  ionViewDidLoad() {
    this.prestadorProvider.getPrestadores().map(res => res.json()).subscribe(
      data => {
        //const response = (data as any);
        //const obj_retorno = JSON.parse(response._body); 
 
         
         this.lista = data;
 
       console.log(this.lista);
      }, error => {
        console.log(error);
      }
      
       )
  }

  itemSelected(feed):void {
    //alert(dados.nome);
    this.navCtrl.push('SolicitaPage', {
      parametroReferenciaEnviado: feed
    });
 }

 Show(){
  
  this.navCtrl.push('HomePage');

}



}
