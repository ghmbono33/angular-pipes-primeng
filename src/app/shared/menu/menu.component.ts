import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'; //Interface
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    //Estructura del Menú

    this.items = [
      {
        label: 'Prime de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dolar',
            routerLink: 'numeros',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
      },
    ];
  }
}
