import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrls: ['./vizsgafeladat.component.css']
})
export class VizsgafeladatComponent {
  suly:number=1;
  magassag:number=1;
  eredmeny:string[]=[];

  EredmenyMentes():void{
     this.eredmeny.push(`Az ${this.suly}kg testsúlyú és ${this.magassag}m magasságú ember testtömeg indexe: ${this.suly/(this.magassag*this.magassag)}`);
  }
}
