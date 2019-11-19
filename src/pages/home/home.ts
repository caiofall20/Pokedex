import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokeService } from '../../providers/poke-service/poke-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pokemon = [];
  public data: any;
  public result: any;


  constructor(public navCtrl: NavController, public pokeService: PokeService) {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokeService.load()
    .then(data => {
      this.pokemon = data;
      this.result = this.pokemon;
     console.log(this.pokemon)


    });

  }

}
