import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokeService } from '../../providers/poke-service/poke-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public obj: any;
  public pokemons: any;

  constructor(public navCtrl: NavController, public pokeService: PokeService) {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokeService.load()
      .then(data => {
        this.obj = data;
        this.pokemons = this.obj.data.results;
      });
  }

}
