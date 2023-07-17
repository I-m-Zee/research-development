import { NgModule } from '@angular/core';

import { SsrsReportRoutingModule } from './ssrs-report-routing.module';
import { MainComponent } from './main/main.component';
import { PrimeSharedModule } from '../prime-shared/prime-shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SsrsReportRoutingModule,
    PrimeSharedModule
  ]
})
export class SsrsReportModule { }
