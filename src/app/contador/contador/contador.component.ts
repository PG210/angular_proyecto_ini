//mover a una etiqueta personalizada creamos componentes
import { Component } from "@angular/core";//siempre se debe importar

@Component
({
    selector:'app-contador',//nombre que se le da al componente
    template: 
    '<button (click)="acumulador(-1);">- 1</button> <span>{{numero}}</span> <button (click)="acumulador(+1);">+ 1</button> <br><br> <button (click)="acum1(-5);">- 5</button> <span>{{base}}</span> <button (click)="acum1(5);">+ 5</button>'
    
})

export class contadorComponent{ //clase que necesito exportar
    public title:string = 'Contador App';
    numero:number=10;
    base:number=5;
  //creamos el metodo sumar
  /*sumar(){
    this.numero+=1;//aumenta el numero
  }
  */
  acumulador(valor:number){
    this.numero+=valor;
  }
  
  acum1(val:number){
    this.base+=val;
   
  }

}