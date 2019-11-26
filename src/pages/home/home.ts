import { Pokemon } from './../../app/model/pokemon';
import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';

import { PokeService } from '../../providers/poke-service/poke-service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pokemon = [];
  public data: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, public pokeService: PokeService, public platform: Platform, private ActionSheetController: ActionSheetController) {
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

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  selectPokemon(pokemon: any) {
this.navCtrl.push(DetailPage,{poke:pokemon});
  }

}


