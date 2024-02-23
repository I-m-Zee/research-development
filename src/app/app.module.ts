import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimengPracticeModule } from './primeng-practice/primeng-practice.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'primeng/api';
import { MaterialPracticeModule } from './material-practice/material-practice.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './primeng-practice/prime-shared/store/reducer/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengPracticeModule,
    AppRoutingModule,
    SharedModule,
    MaterialPracticeModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() })
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: false,
    //   autoPause: true,
    //   features: {
    //     pause: false,
    //     lock: true,
    //     persist: true
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
