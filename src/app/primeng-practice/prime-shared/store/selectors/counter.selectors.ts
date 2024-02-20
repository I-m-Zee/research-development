import { createFeatureSelector, createSelector } from "@ngrx/store";
import { iCounterState } from "../state/counter.state";
import { state } from "@angular/animations";


const getConterState = createFeatureSelector<iCounterState>('counter');

export const getCounter = createSelector(getConterState, (state) => state.counter)

export const getName = createSelector(getConterState, (state) => state.name)