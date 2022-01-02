import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'maNolo bono';
  valor: number = 1000;
  obj = {
    nombre: 'MaNOlo bono',
  };
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    //Para que haga el efecto al hacer click
    this.primengConfig.ripple = true;
  }
  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
