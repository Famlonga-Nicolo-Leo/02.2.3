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
  onTypeClick(type: any): void {
    if (type.name == "normal"){
      this.o = this.http.get("https://pokeapi.co/api/v2/type/" + type.name)
      this.o.subscribe(this.GetData)
    } 
}

}
