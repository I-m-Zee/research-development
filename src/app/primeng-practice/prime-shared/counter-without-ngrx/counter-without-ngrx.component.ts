import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-without-ngrx',
  templateUrl: './counter-without-ngrx.component.html',
  styleUrl: './counter-without-ngrx.component.scss',
  providers: [CounterService]
})
export class CounterWithoutNgrxComponent implements OnInit {

  constructor(protected counterService: CounterService) { }

  counter: number = 0;

  ngOnInit(): void {

  }

  onIncrement(): void {
    this.counter++;
  }

  onDecrement(): void {
    this.counter--;
  }

  onReset(): void {
    this.counter = 0;
  }

}