import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styles: [
  ]
})
export class CounterRouteComponent implements OnInit {

  counter:number=0;
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
  const initial= Number(this.route.snapshot.paramMap.get('number'));
    this.counter=isNaN(initial)?10:initial;
  }
  increaseBy(value:number){
  this.counter +=value;

  }
}

