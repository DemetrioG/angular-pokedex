import { Component } from '@angular/core';
import { Pokemon } from 'src/model/Pokemon';
import { PokemonService } from 'src/services/pokemon.service';
import { Type } from '../../model/Types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonService) {}
}
