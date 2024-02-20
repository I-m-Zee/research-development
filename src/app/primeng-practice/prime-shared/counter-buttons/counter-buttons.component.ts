import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from "../store/actions/counter.actions"
import { iCounterState } from '../store/state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss',
  providers: [CounterService]
})
export class CounterButtonsComponent implements OnInit {

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor(protected counterService: CounterService, private store: Store<{ counter: iCounterState }>) { }

  ngOnInit(): void {

  }

  onIncrement() { this.store.dispatch(increment()) }
  onDecrement() { this.store.dispatch(decrement()) }
  onReset() { this.store.dispatch(reset()) }




}
