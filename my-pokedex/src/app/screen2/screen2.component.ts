import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../pokeservice.service';

@Component({
  selector: 'app-screen2',
  standalone: true,
  imports: [],
  templateUrl: './screen2.component.html',
  styleUrl: './screen2.component.css'
})
export class Screen2Component implements OnInit {

  constructor (private pokeserviceService: PokeserviceService){}

  ngOnInit(): void {
      this.pokeserviceService.getPokemons()
  }
}
