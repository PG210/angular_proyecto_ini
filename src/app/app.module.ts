import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contadormodule } from './contador/contador.module';
import { Heroemodule } from './heroes/heroe.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Heroemodule,
    Contadormodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
