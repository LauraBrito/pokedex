import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, map, mergeMap, ReplaySubject, switchMap } from 'rxjs';
import { Pokemon } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];
  
  constructor(
    private httpClient: HttpClient,
    ) {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

      this.httpClient.get<any>(url).pipe(
        map(value => value.results),
        map((value: any) => {
          return from(value).pipe(
            mergeMap((v:any) => this.httpClient.get(v.url))
          )
        }),
        mergeMap(value => value),
        ).subscribe((result: any) => this.pokemons[result.id] = {
            number: result.id,
            name: result.name,
            image: result.sprites.front_default,
            types: result.types.map(t => t.type.name),
          });

        }
   }

