import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';//importar el ngmodule
import { contadorComponent } from './contador/contador.component';


@NgModule({

    declarations: [
        contadorComponent
         ],//las declaraciones nos dicen las cosas que contiene el modulo
    exports:[
        contadorComponent
    ],//exporta el componente a utilizar

})


export class Contadormodule{}; //exportar la clase para utiñizarla fuera de los archivos
