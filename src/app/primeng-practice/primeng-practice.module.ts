import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengPracticeRoutingModule } from './primeng-practice-routing.module';
import { PrimeSharedModule } from './prime-shared/prime-shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    PrimengPracticeRoutingModule,
    PrimeSharedModule
  ]
})
export class PrimengPracticeModule { }
