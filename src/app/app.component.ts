import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IPersona } from './interface/ipersona.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Ejercicio1';

  constructor() { }

  objetoPersonas: Array<IPersona> = [];

  ngOnInit(): void {
    this.iniciarListaPersonas();
  }
  iniciarListaPersonas(){
    this.objetoPersonas.push({
      id: 1,
      genero: 'male',
      nombre: 'Mr Oliver Petersen',
      ubicacion: 'Lundby Syddanmark Denmark',
      correoElectronico: 'oliver.petersen@example.com',
      fechaNacimiento: new Date("1978-05-03T23:37:29.369Z"),
      fotografia: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
      id: 1,
      genero: 'male',
      nombre: 'Mr Oliver Petersen',
      ubicacion: 'Lundby Syddanmark Denmark',
      correoElectronico: 'oliver.petersen@example.com',
      fechaNacimiento: new Date("1978-05-03T23:37:29.369Z"),
      fotografia: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
      id: 1,
      genero: 'male',
      nombre: 'Mr Oliver Petersen',
      ubicacion: 'Lundby Syddanmark Denmark',
      correoElectronico: 'oliver.petersen@example.com',
      fechaNacimiento: new Date("1978-05-03T23:37:29.369Z"),
      fotografia: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
      id: 1,
      genero: 'male',
      nombre: 'Mr Oliver Petersen',
      ubicacion: 'Lundby Syddanmark Denmark',
      correoElectronico: 'oliver.petersen@example.com',
      fechaNacimiento: new Date("1978-05-03T23:37:29.369Z"),
      fotografia: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
      id: 1,
      genero: 'male',
      nombre: 'Mr Oliver Petersen',
      ubicacion: 'Lundby Syddanmark Denmark',
      correoElectronico: 'oliver.petersen@example.com',
      fechaNacimiento: new Date("1978-05-03T23:37:29.369Z"),
      fotografia: 'https://randomuser.me/api/portraits/men/18.jpg'
    });
  }
}
