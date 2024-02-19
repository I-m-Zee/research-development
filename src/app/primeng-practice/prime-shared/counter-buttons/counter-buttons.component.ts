import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';

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

  constructor(protected counterService: CounterService) { }

  ngOnInit(): void {

  }



}
