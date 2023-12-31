import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimengPracticeModule } from './primeng-practice/primeng-practice.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'primeng/api';
import { MaterialPracticeModule } from './material-practice/material-practice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengPracticeModule,
    AppRoutingModule,
    SharedModule,
    MaterialPracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
