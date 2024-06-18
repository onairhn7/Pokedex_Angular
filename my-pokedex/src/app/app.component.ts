import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { NotificacionesService } from './notificaciones.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Screen1Component, Screen2Component, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public notificaciones: NotificacionesService){}
  title = 'my-pokedex';
}
