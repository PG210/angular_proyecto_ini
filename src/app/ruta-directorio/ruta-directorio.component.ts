import { Component} from '@angular/core';

@Component({
  selector: 'app-ruta-directorio',
  templateUrl: './ruta-directorio.component.html',
})
export class RutaDirectorioComponent {

  heroes: string[]=['Spiderman', 'Hulk', 'Thor'];
  borrado: string='';
  
  borrarHeroe(){
    console.log("Borrando....");
   // this.heroes[0]=" ";
  this.borrado = this.heroes.shift() || '';//borra el primer elemento de un arreglo 
  
  }
}
