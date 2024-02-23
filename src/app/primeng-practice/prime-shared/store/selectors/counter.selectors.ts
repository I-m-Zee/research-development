import { createFeatureSelector, createSelector } from "@ngrx/store";
import { iCounterState } from "../state/counter.state";
import { state } from "@angular/animations";


const getCounterState = createFeatureSelector<iCounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => state.counter)

export const getName = createSelector(getCounterState, (state) => state.name)