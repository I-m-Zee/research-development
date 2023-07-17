import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'prime', loadChildren: () => import('./primeng-practice/primeng-practice.module').then(m => m.PrimengPracticeModule) },
  { path: 'material', loadChildren: () => import('./material-practice/material-practice.module').then(m => m.MaterialPracticeModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
