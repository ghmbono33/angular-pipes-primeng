import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

// Módulo propio
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
//Cambiar el locale (idioma) de la aplicación
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule, //nuestro router
    SharedModule,
    VentasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
