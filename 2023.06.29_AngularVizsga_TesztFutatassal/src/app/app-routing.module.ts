import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HibaComponent } from './hiba/hiba.component';
import { VizsgafeladatComponent } from './vizsgafeladat/vizsgafeladat.component';

const routes: Routes = [
{path:'vizsgafeladat',component:VizsgafeladatComponent},
{path:'hiba',component:HibaComponent},
{path:'',redirectTo:'vizsgafeladat',pathMatch:'full'},
{path:'**',component:HibaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
