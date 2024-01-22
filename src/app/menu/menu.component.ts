import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  // @Input() mensaje: any;
  // @Output() mensajeEvento = new EventEmitter();

  // public mensajeParaPadre:string='Comunicacion de hijo a padre';

  // public enviarRespuesta(){
  //   this.mensajeEvento.emit(this.mensajeParaPadre);
  // }

}
