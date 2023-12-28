import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengPracticeRoutingModule } from './primeng-practice-routing.module';
import { PrimeSharedModule } from './prime-shared/prime-shared.module';
import { ReversRowInTableComponent } from './revers-row-in-table/revers-row-in-table.component';
import { PrimengUiModule } from './primeng-ui.module';


@NgModule({
  declarations: [
    ReversRowInTableComponent
  ],
  imports: [
    PrimengPracticeRoutingModule,
    PrimeSharedModule
  ]
})
export class PrimengPracticeModule { }
