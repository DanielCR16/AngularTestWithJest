import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mensajeParaHijo='Comunicacion de padre a hijo';
  mensajeDesdeHijo:string='';

  public receiveMessage($event: string){
    this.mensajeDesdeHijo=$event;
  }
}
