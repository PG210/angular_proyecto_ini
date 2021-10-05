import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';//importar el ngmodule
import { RutaDirectorioComponent } from '../ruta-directorio/ruta-directorio.component';
import { heroeComponent } from './heroe/heroe.component';

@NgModule({

    declarations: [
        heroeComponent,
        RutaDirectorioComponent
         ],//las declaraciones nos dicen las cosas que contiene el modulo
    exports:[
        RutaDirectorioComponent
    ],//exporta el componente a utilizar
    imports:[
        CommonModule//se debe importortar este modulo
    ]
})


export class Heroemodule{}; //exportar la clase para utiñizarla fuera de los archivos
