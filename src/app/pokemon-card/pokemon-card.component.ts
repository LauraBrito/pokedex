import { Pokemon } from './../model/Pokemon';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input('pokemon')
  public pokemon: Pokemon;

  public leadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while (s.length < (size || 2)) {
      s =  '0' + s;
    }

    return s;
  }

}
