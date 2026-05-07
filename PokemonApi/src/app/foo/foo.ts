import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foo',
  imports: [CommonModule],
  templateUrl: './foo.html',
  styleUrl: './foo.css',
})
export class FooComponent {
  data! : any;
  pokemonDetail!: any;
  detail!: any;
  loading: boolean = false;
  o! :Observable<Object>;

  constructor(public http : HttpClient) {}
  MakeRequest(): void{
    this.loading= true
    this.o = this.http.get("https://pokeapi.co/api/v2/type/")
    this.o.subscribe(this.GetData)
  }
  GetData =(d: any) => {
    this.loading = false
    this.data = d
    
  }
  Getnamepokemon = (d: any) => {
    this.loading = false;
    this.detail = d;
}
  onTypeClick(type: any): void {
    console.log(type.name);  // cosa stampa?
    console.log("https://pokeapi.co/api/v2/type/" + type.name);  // URL corretto?
    this.o = this.http.get("https://pokeapi.co/api/v2/type/" + type.name);
    this.o.subscribe(this.Getnamepokemon);
}
onPokemonClick(pokemon: any): void {
    this.o = this.http.get(pokemon.pokemon.url);  // usa l'url che già ti da la PokeAPI
    this.o.subscribe(this.GetPokemonDetail);
}

GetPokemonDetail = (d: any) => {
    this.pokemonDetail = d;
}

}
