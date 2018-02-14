import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth } from "angularfire2/auth";
import { User } from '../../models/user';
import { Geolocation } from '@ionic-native/geolocation';
import { Guest } from '../../models/guest';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.

 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   user = {} as Guest;
   @ViewChild('map') mapElement: ElementRef;
   map: any;
 

  constructor(
    private ofAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
  private toast: ToastController) {
  }

  ionViewDidLoad() {
    this.loadMap2();
    this.ofAuth.authState.subscribe(data =>  {
      if(data && data.email && data.uid){
      this.toast.create({
        message: 'Welcome to APP_Name, ${data.email}',
        duration: 3000
       
      }).present();
      this.user.email = data.email;
      
    } 
    else {
     console.log('Erro')
    }
    });

  }

  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }

  loadMap2(){
    this.geolocation.getCurrentPosition().then((position) => {
      
      this.user.latitude =  position.coords.latitude;
      this.user.longitude = position.coords.longitude;
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }
    

  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
  }

  listar(){
    console.log(this.user);
    this.navCtrl.push('PrestadorPage');

  }

}
