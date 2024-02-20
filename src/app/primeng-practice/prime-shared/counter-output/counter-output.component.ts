import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Store } from '@ngrx/store';
import { iCounterState } from '../store/state/counter.state';
import { first, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit {
  constructor(private store: Store<{ counter: iCounterState }>) { }
  @Input() counter: number = 0;
  storeCounter: number = 0;
  ngOnInit(): void {
    this.store.select('counter').subscribe(res => {
      console.log("Counter: ", res.counter)
      this.storeCounter = res.counter;
    })
  }
}
