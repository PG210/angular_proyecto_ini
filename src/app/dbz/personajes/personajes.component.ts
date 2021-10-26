import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbzInterface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{
  get personajes(){
    return this.dbService.personajes;
  }

  //@Input() personajes:Personaje[] =[];

  constructor(private dbService:DbzService){
   
  }
}
