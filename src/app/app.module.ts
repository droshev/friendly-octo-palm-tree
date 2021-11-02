import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '@fundamental-ngx/core/icon';
import { ButtonModule } from '@fundamental-ngx/core/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
