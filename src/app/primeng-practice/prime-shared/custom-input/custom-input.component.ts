import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iCounterState } from '../store/state/counter.state';
import { changeName, customIncrement } from '../store/actions/counter.actions';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent implements OnInit {

  value: number = 0;
  counterName: string = '';
  constructor(private store: Store<{ counter: iCounterState }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(res => {
      console.log("Name: ", res.name)
      this.counterName = res.name
    })
  }

  clickToAdd() {
    this.store.dispatch(customIncrement({ value: this.value }))
  }

  onChangeName() {
    this.store.dispatch(changeName())
  }
}
