import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListadoPokemon } from './Interfaces/IlistadoPokemon';
import { IDetallePokemon } from './Interfaces/IDetallePokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  private apiUrlBase = "https://pokeapi.co/api/v2/"

 
  constructor(private cliente: HttpClient) { }

  getPokemons(limit : number): Observable<IListadoPokemon> {
    const resultado = this.cliente.get<IListadoPokemon>(`${this.apiUrlBase}/pokemon/?limit=${limit}`);
    return resultado;
    
  }

  getDetallesPokemon(url: string): Observable<IDetallePokemon>{
     return this.cliente.get<IDetallePokemon>(url)

  }
  
  
}
