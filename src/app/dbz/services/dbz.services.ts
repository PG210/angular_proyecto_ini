import { Injectable } from "@angular/core";
import { Personaje } from '../interface/dbzInterface';

@Injectable()//importamos el injectable

export class DbzService{
  //definimos un arreglo de personajes
  private _personajes:Personaje[]=[
    {nombre:'Goku',
    poder:34000
    },
    {
      nombre: 'Yamcha',
      poder:1000
    }
  ];

  get personajes(): Personaje[]{
    return [...this._personajes];//retorna un areglo de personaje
  }
     constructor(){
     }
  agregarPersonaje(personaje:Personaje){
       this._personajes.push(personaje);
  }
}