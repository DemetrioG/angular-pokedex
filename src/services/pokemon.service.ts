import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, map, mergeMap } from 'rxjs';
import { Pokemon } from 'src/model/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: any = [];

  constructor(private httpClient: HttpClient) {
    const URL = 'https://pokeapi.co/api/v2/pokemon';

    this.httpClient
      .get<any>(URL)
      .pipe(
        map((value) => value.results),
        map((value) => {
          return from(value).pipe(
            mergeMap((v: any) => this.httpClient.get(v.url))
          );
        }),
        mergeMap((value) => value)
      )
      .subscribe((result: any) => {
        const pokemon: Pokemon = {
          number: result.id,
          name: result.name,
          image: result.sprites.front_default,
          types: result.types.map((t: any) => t.type.name),
        };

        return (this.pokemons[result.id] = pokemon);
      });
  }
}
