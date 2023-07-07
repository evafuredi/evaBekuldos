import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {
  vizsgaltSzam!:number;
  PrimE(vizsgaltErtek:number):boolean{
   let oszthatoSzama=0;
   for(let i=1;i<=vizsgaltErtek;i++){
     if(vizsgaltErtek%i==0){
       oszthatoSzama++;
     }
   }
   if(oszthatoSzama==2){
     return true;
   }

   else{
     return false;
   }
  }

  EredmenyKiiro():string{
   if(this.PrimE(this.vizsgaltSzam)){
     return "Prím"
   }
   else{
     return"Nem prím"
   }
  }

  eredmenyek:string=this.EredmenyKiiro();

  EredmenyMentes(){
   if(this.PrimE(this.vizsgaltSzam)){
     this.eredmenyListazo.push(`A(z) ${this.vizsgaltSzam} Prím`);
   }
   else{
     this.eredmenyListazo.push(`A(z) ${this.vizsgaltSzam} Nem prím`);
   }
  }
  eredmenyListazo:string[]=[];
}
