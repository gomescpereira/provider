
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the PrestadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrestadoresProvider {

  baseApiPah = "http://eccoengmdp.hopto.org:8100/uso/";


 
  constructor(public http: Http) {
    console.log('Hello PrestadorProvider Provider');
  }

  getPrestadores() {
    
   //return  this.http.get(this.baseApiPah +"tecnico/tecnicos");
   //return  this.http.get("http://eccoengmdp.hopto.org:8100/uso/api/tecnico/ConsultarTecnicos");
   return  this.http.get("/api");
   
  }
}

