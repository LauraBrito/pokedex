import { Component } from '@angular/core';

import { Pokemon } from './../model/Pokemon';
import { Type } from '../model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent{

  public pokemons: Pokemon[] = [{
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    name: 'Bulbasaur',
    number: 1,
    types: [
      Type.Grass,
      Type.Poison,
    ],
  },
];
}
