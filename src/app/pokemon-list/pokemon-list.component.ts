import { PokemonService } from './../services/pokemon.service';
import { Component } from '@angular/core';

import { Pokemon } from './../model/Pokemon';
import { Type } from '../model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent{

constructor(
    public pokemonService: PokemonService,
  ) {
  
}
}
