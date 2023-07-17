import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeSharedRoutingModule } from './prime-shared-routing.module';
import { PrimengUiModule } from '../primeng-ui.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeSharedRoutingModule,
    PrimengUiModule
  ],
  exports: [
    
  ]
})
export class PrimeSharedModule { }
