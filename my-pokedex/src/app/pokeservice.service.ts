import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  private apiUrlBase = "https://pokeapi.co/api/v2/"

  constructor(private cliente: HttpClient) { }


  getPokemons(){

    const resultado = this.cliente.get(`${this.apiUrlBase}/pokemon/?limit=150`)
    console.log(resultado)
    resultado.subscribe(pokemons =>{})
    
  }
}
