import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the HeroService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeService {
  data: any;
  constructor(public http: Http) {
    console.log('Hello PokeService');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }


    return new Promise(resolve => {

      this.http.get(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
