import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

// Módulo propio
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
//Cambiar el locale (idioma) de la aplicación
import localEspanyol from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEspanyol);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule, //nuestro router
    SharedModule,
    VentasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], //Definir el español
  bootstrap: [AppComponent],
})
export class AppModule {}
