import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Manolo';
  genero: string = 'masculino';
  invitacion = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clientes: string[] = ['Fleki', 'Solet', 'Bimba', 'Coba'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  cambiarPersona() {
    this.nombre = 'Esther';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }
  //KeyValue Pipe
  persona = {
    nombre: 'Manolo',
    edad: 50,
    direccion: 'Castellón',
  };
  //Json Pipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Batman', vuela: false },
    { nombre: 'Fleki', vuela: true },
  ];
  //Async Pipe
  //miObservable es un observable que va a estar emitiendo valores numéricos
  miObservable = interval(1000); // 0, 1, 2, ...
  valorPromesa = new Promise((resuelve, rechaza) => {
    setTimeout(() => {
      resuelve('Tenemos datos de promesa');
    }, 3500);
  });
}
