import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class heroeComponent{
   nombre:string='Ironman';
   edad:number=40
   //creamos un get para convertir a mayusculas
   get nombreCapital():string{
       return this.nombre.toUpperCase();//cambia a mayusculas
   }
   obtenerNombre(): string{
       //return '${this.nombre}-${this.edad}';
       return this.nombre + ' ' + this.edad;
   }
   cambiarNombre():string{
       return this.nombre="Spiderman";
   }
   cambiarEdad():number{
       return this.edad=89;
   }
}