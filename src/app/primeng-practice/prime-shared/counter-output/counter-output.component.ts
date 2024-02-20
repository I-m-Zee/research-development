import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Store } from '@ngrx/store';
import { iCounterState } from '../store/state/counter.state';
import { BehaviorSubject, Observable, Subject, Subscription, first, firstValueFrom, take, takeLast, takeUntil, takeWhile, tap } from 'rxjs';
import { getCounter } from '../store/selectors/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // Unsubscribing Techniques
  //#region 
  counterSubscription!: Subscription; //with Subscription
  stopCounter$!: Observable<any> // with Observable
  onDestroy$: Subject<void> = new Subject(); // with Subject
  behaviorSubject$ = new BehaviorSubject('Initial value'); // with Behaviour Subject
  bSubscribed: boolean = false; // with Boolean Variable
  //#endregion

  @Input() counter: number = 0;
  storeCounter: number = 0;
  constructor(private store: Store<{ counter: iCounterState }>) { }
  ngOnInit(): void {
    // Handle Supsciptions with Subscritions
    this.counterSubscription = this.store.select(getCounter).subscribe(res => {
      console.log("Counter: ", res)
      this.storeCounter = res;
    })

    // Handle Subscriptions with Observable
    // this.stopCounter$ = this.store.select(getCounter) as Observable<any>;

    // // Handle Subscriptions with Subject and takeUntil
    // this.store.select(getCounter).pipe(takeUntil(this.onDestroy$)).subscribe(res => {
    //   console.log("Counter: ", res)
    //   this.storeCounter = res;
    // })

    // Handle Subscriptions with Subject take(1)
    // this.store.select(getCounter).pipe(take(1)).subscribe(res => {
    //   console.log("Counter: ", res)
    //   this.storeCounter = res;
    // })

    // Handle Subscriptions with takeLast
    // behaviorSubject$.pipe(first()).subscribe((value) => console.log('The initial value of the  BehaviorSubject is:', value));
    // this.store.select(getCounter).pipe(takeLast(1)).subscribe(res => {
    //   console.log("Counter: ", res)
    //   this.storeCounter = res;
    // })

    // Handle Subscriptions with firstValueFrom
    // this.firstValue();

    // Handle Subscriptions with Behaviour Subject and first
    // behaviorSubject$.pipe(first()).subscribe((value) => console.log('The initial value of the  BehaviorSubject is:', value));

    // Handle Subscriptions with simple Boolean Vairable and takeWhile
    // this.store.select(getCounter).pipe(takeWhile(() => !this.bSubscribed)).subscribe(res => {
    //   console.log("Counter: ", res)
    //   this.storeCounter = res;
    // })
  }

  // Handle Subscriptions with Behaviour FirstValueFrom
  async firstValue() {
    const observable$ = this.store.select(getCounter);
    const firtVal = await firstValueFrom(observable$);
    console.log("Counter: ", firtVal)
  }

  ngOnDestroy(): void {
    // with Subscription
    if (this.counterSubscription) {
      console.log("Component Destroyed")
      this.counterSubscription.unsubscribe();
    }

    // With Subject and takeUntil
    // this.onDestroy$.next();
    // this.onDestroy$.complete()

    // with Vabriable and takeWhile
    // this.bSubscribed = true;
  }

}
