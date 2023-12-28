import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReversRowInTableComponent } from './revers-row-in-table/revers-row-in-table.component';

const routes: Routes = [
  { path: 'reverstable', component: ReversRowInTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeSharedRoutingModule { }
