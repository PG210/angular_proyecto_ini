import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.services';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent //vista para ver en otra pagina
  ],
  imports: [
    CommonModule,
    FormsModule//para manejar los eventos del formulario
  ],
  providers:[//los providers sirven para instanciar los servicios
    DbzService
  ]
})
export class DbzModule { }
