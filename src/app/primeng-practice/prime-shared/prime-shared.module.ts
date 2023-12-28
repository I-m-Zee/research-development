import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeSharedRoutingModule } from './prime-shared-routing.module';
import { PrimengUiModule } from '../primeng-ui.module'
import { ReversRowInTableComponent } from './revers-row-in-table/revers-row-in-table.component';


@NgModule({
  declarations: [
    ReversRowInTableComponent
  ],
  imports: [
    CommonModule,
    PrimeSharedRoutingModule,
    PrimengUiModule
  ],
  exports: [
    
  ]
})
export class PrimeSharedModule { }
