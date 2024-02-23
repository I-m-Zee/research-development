import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeSharedRoutingModule } from './prime-shared-routing.module';
import { PrimengUiModule } from '../primeng-ui.module'
import { ReversRowInTableComponent } from './revers-row-in-table/revers-row-in-table.component';
import { ProductService } from './services/product.service';
import { CounterWithoutNgrxComponent } from './counter-without-ngrx/counter-without-ngrx.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterService } from './services/counter.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { D3ChartPracticeComponent } from './d3-chart-practice/d3-chart-practice.component';
import { BarComponent } from './d3-chart-practice/bar/bar.component';
import { PieComponent } from './d3-chart-practice/pie/pie.component';
import { ScatterComponent } from './d3-chart-practice/scatter/scatter.component';


@NgModule({
  declarations: [
    ReversRowInTableComponent,
    CounterOutputComponent,
    CounterWithoutNgrxComponent,
    CounterButtonsComponent,
    CustomInputComponent,
    D3ChartPracticeComponent,
    BarComponent,
    PieComponent,
    ScatterComponent
  ],
  imports: [
    CommonModule,
    PrimeSharedRoutingModule,
    PrimengUiModule,
    SharedModule
  ],
  exports: [
  ]
})
export class PrimeSharedModule { }
