import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'src/model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  getPokemonNumber = getPokemonNumber;
  getPokemonImage = getPokemonImage;
}
