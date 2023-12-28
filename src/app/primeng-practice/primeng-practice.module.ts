import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengPracticeRoutingModule } from './primeng-practice-routing.module';
import { SsrsReportModule } from './ssrs-report/ssrs-report.module';
import { PrimeSharedModule } from './prime-shared/prime-shared.module';
import { PrimengUiModule } from './primeng-ui.module';


@NgModule({
  declarations: [
  ],
  imports: [
    PrimengPracticeRoutingModule,
    SsrsReportModule,
    PrimeSharedModule,
  ],
  exports: [
  ]
})
export class PrimengPracticeModule { }
