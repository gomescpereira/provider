import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule, FirebaseAppProvider } from "angularfire2";

import { filterQueryId } from '@angular/core/src/view/util';
import { FirebaseAuth } from '@firebase/auth-types';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  informa: string;

  constructor(
    private ofAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
   private facebook: Facebook
  ) {
  }

  async login(user: User) {
    try {
      const result = await this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.navCtrl.setRoot('HomePage');
      }
    } catch (e) {
      console.error(e);
    }

  }

  facebookLogin(): Promise<any> {
     console.log("entrou aqui"); 
    return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
        });

    }).catch((error) => { console.log(error) });
  }






async off(){
  const result = await this.ofAuth.auth.signOut();
  this.informa = "Você foi deslogado";
}

register(){
  this.navCtrl.push('RegisterPage');

}

ionViewDidLoad() {
  // console.log('ionViewDidLoad LoginPage');
}

}
