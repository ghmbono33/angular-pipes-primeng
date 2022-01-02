import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(
    heroes: Heroe[],
    ordenarPor: string,
    ascendente: boolean = true
  ): Heroe[] {
    const orden: number = ascendente ? 1 : -1;
    switch (ordenarPor) {
      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre ? orden : -orden));
      case 'vuela':
        return heroes.sort((a, b) => (a.vuela > b.vuela ? orden : -orden));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? orden : -orden));
      default:
        return heroes;
    }
  }
}
