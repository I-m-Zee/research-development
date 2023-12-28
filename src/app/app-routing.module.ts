import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'prime', loadChildren: () => import('./primeng-practice/primeng-practice.module').then(m => m.PrimengPracticeModule) },
  { path: 'material', loadChildren: () => import('./material-practice/material-practice.module').then(m => m.MaterialPracticeModule) },
  // { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
