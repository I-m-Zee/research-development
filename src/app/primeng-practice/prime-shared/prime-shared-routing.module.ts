import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReversRowInTableComponent } from './revers-row-in-table/revers-row-in-table.component';
import { CounterWithoutNgrxComponent } from './counter-without-ngrx/counter-without-ngrx.component';
import { D3ChartPracticeComponent } from './d3-chart-practice/d3-chart-practice.component';

const routes: Routes = [
  { path: 'table', component: ReversRowInTableComponent, pathMatch: 'full' },
  { path: 'simple-counter', component: CounterWithoutNgrxComponent, pathMatch: 'full' },
  { path: 'd3-charts', component: D3ChartPracticeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeSharedRoutingModule { }
