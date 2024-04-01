import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PrimengPracticeModule } from './primeng-practice/primeng-practice.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'primeng/api';
import { MaterialPracticeModule } from './material-practice/material-practice.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './primeng-practice/prime-shared/store/reducer/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengPracticeModule,
    AppRoutingModule,
    SharedModule,
    MaterialPracticeModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
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
