import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contadormodule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { Heroemodule } from './heroes/heroe.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Heroemodule,
    Contadormodule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
