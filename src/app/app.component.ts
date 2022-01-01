import { Component } from '@angular/core';

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
  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
