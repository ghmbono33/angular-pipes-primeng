import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'fleki';
  nombreUpper: string = 'FLEKI';
  nombreCompleto: string = 'Fleki CHIN';
  fecha: Date = new Date();
}
