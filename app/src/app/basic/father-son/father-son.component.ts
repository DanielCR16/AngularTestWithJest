import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../father/father.component';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.css']
})
export class FatherSonComponent implements OnInit {
 @Input() client?:Client;
 @Output() onDeleteClient = new EventEmitter();
 @Output() onClientUpdating = new EventEmitter<Client>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.client=undefined;
    this.onDeleteClient.emit();
  }

  onChange(newId:number){
    if(!this.client)return;
    this.client = {
      ...this.client,
      id:newId,
    }

   this.onClientUpdating.emit(this.client)
  }
}
