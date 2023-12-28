import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ssrs', loadChildren: () => import('./ssrs-report/ssrs-report.module').then(m => m.SsrsReportModule) },
  { path: 'prime-shared', loadChildren: () => import('./prime-shared/prime-shared.module').then(m => m.PrimeSharedModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengPracticeRoutingModule { }
