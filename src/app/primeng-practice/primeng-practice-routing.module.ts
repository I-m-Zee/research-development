import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ssrs', loadChildren: () => import('./ssrs-report/ssrs-report.module').then(m => m.SsrsReportModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengPracticeRoutingModule { }
