import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VizsgafeladatComponent } from './vizsgafeladat/vizsgafeladat.component';
import { FormsModule } from '@angular/forms';
import { HibaComponent } from './hiba/hiba.component';


@NgModule({
  declarations: [
    AppComponent,
    VizsgafeladatComponent,
    HibaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
