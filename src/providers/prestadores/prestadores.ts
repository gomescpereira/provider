import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Prestador } from '../../models/provider';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the PrestadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrestadoresProvider {
  items: Observable<Prestador[]>;
  private pathref = this.db.list<Prestador>('prestadores');

  baseApiPah = "http://eccoengmdp.hopto.org:8100/uso/";

  constructor(public http: Http, private db: AngularFireDatabase) {
    this.items = db.list<Prestador>('itens').valueChanges();
  }



  GetList() {
    return this.pathref;
  }

  Add(item: Prestador) {

    console.log(item);

    return this.pathref.push(item);
  }






  getPrestadores() {

    //return  this.http.get(this.baseApiPah +"tecnico/tecnicos");
    //return  this.http.get("http://eccoengmdp.hopto.org:8100/uso/api/tecnico/ConsultarTecnicos");
    return this.http.get("/api");

  }
}

