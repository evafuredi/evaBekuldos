import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EUComponent } from './eu/eu.component';
import { FIFAComponent } from './fifa/fifa.component';
import { HELSINKIComponent } from './helsinki/helsinki.component';
import { SNOOKERComponent } from './snooker/snooker.component';
import { F1Component } from './f1/f1.component';
import { FormsModule } from '@angular/forms';
import { HibaComponent } from './hiba/hiba.component';

@NgModule({
  declarations: [
    AppComponent,
    EUComponent,
    FIFAComponent,
    HELSINKIComponent,
    SNOOKERComponent,
    F1Component,
    HibaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
