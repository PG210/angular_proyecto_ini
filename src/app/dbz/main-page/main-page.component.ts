import { Component, OnInit } from '@angular/core';
import { Personaje} from '../interface/dbzInterface';
import { DbzService } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']//se importa del archivo interfaces
})
export class MainPageComponent {
   //creamos una get
   //get personajes():Personaje[]{  //con este get puede llamar al servicio
     //return this.dbzService.personajes;
   //} 
  
  //quitamos la parte de aqui para colocarla solamente en una clase 
  nuevo:Personaje={//esta parte define un nuevo personaje por defecto y no ingresar un elemento vacio
   nombre:'Roshi',
   poder:5000
  }
  //agregarNuevoPersonaje(argumento:Personaje){//funcion que llega al html padre
   // this.personajes.push(argumento);//coloca el evento capturado y lo inserta
  //}
  //creamos el constructor de la clase para utilizar el servicio
 /* constructor(private dbzService:DbzService){

  }*/
  constructor(){
  
  }
}
