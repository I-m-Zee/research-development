import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

    constructor() { }

    counter: number = 0;

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