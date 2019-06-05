import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const APP_NAME = new InjectionToken<string>('App Name');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_NAME, useValue: 'Ivy!' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
