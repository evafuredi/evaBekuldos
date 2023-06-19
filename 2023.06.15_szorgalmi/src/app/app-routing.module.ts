import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EUComponent } from './eu/eu.component';
import { F1Component } from './f1/f1.component';
import { FIFAComponent } from './fifa/fifa.component';
import { HELSINKIComponent } from './helsinki/helsinki.component';
import { HibaComponent } from './hiba/hiba.component';
import { SNOOKERComponent } from './snooker/snooker.component';

const routes: Routes = [
  {path:'EU',component:EUComponent},
  {path:'F1',component:F1Component},
  {path:'FIFA', component:FIFAComponent},
  {path:'HELSINKI', component:HELSINKIComponent},
  {path:'SNOOKER', component:SNOOKERComponent},
  {path:'', redirectTo:'EU',pathMatch:'full'},
  {path:'**',component:HibaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
