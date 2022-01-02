import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayusculas: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'SuperFleki',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'SuperSolet',
      vuela: true,
      color: Color.amarillo,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Capitán America',
      vuela: false,
      color: Color.azul,
    },
  ];
  toggleMayusculas(): void {
    this.enMayusculas = !this.enMayusculas;
  }
}
