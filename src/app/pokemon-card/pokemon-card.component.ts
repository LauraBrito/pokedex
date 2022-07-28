import { getPokemonImage, getPokemonNumber, Pokemon } from './../model/Pokemon';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input('pokemon')
  public pokemon: Pokemon;

  public getPokemonImage = getPokemonImage; 
  public getPokemonNumber = getPokemonNumber; 

}
