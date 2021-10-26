import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Personaje } from '../interface/dbzInterface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {
    
  
 //creamos un objeto
  @Input() nuevo:Personaje={
  nombre:'',
  poder:0
}
constructor(private dbzService:DbzService){

}
//@Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();//el eventEmiter debe pertenecer ha angular core
//import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//si no se colca en anguklar core sale error de generico
//esto sirve para la comunicacion entre hijos y padres 


//creamos el metodo agregar
agregar(){//recibe un parametro
//validar si ingresa null
if(this.nuevo.nombre==""){
  return;
}else{
  this.dbzService.agregarPersonaje(this.nuevo);
 // this.onNuevoPersonaje.emit(this.nuevo);//esta emitiendo un nuevo personaje al componente padre
  this.nuevo={//deja nuevamente en blanco los input del formulario
    nombre:'',
    poder:0
  };
  console.log(this.nuevo);
}
}

}
