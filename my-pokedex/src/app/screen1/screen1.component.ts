import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-screen1',
  standalone: true,
  imports: [],
  templateUrl: './screen1.component.html',
  styleUrl: './screen1.component.css'
})
export class Screen1Component  {

  constructor (private notificaciones :NotificacionesService){}


  agregarNotifiacacionesScreen1(){
    this.notificaciones.agregarMensaje("agregando mensaje desde screen 1")
  }
}

