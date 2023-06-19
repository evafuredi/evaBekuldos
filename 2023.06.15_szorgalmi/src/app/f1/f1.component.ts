import { Component } from '@angular/core';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class F1Component {
  pilotaAdat:PilotaInfo[] = [{
   nev:"Max Verstappen",
   osszpont:454,
   elsoHelyezesekSzama:15,
   polePosition:8,
  },
  {
    nev:"Charles Leclerc",
    osszpont:308,
    elsoHelyezesekSzama:3,
    polePosition:8,
   },
   {
    nev:"Sergio Perez",
    osszpont:305,
    elsoHelyezesekSzama:2,
    polePosition:0,
   },
   {
    nev:"George Russell",
    osszpont:275,
    elsoHelyezesekSzama:1,
    polePosition:2,
   },
   {
    nev:"Carlos Sainz Jr",
    osszpont:246,
    elsoHelyezesekSzama:1,
    polePosition:3,
   },
   {
    nev:"Lewis Hamilton",
    osszpont:240,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Lando Norris",
    osszpont:122,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Esteban Ocon",
    osszpont:92,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Fernando Alonso",
    osszpont:81,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Valtteri Bottas",
    osszpont:49,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Daniel Ricciardo",
    osszpont:37,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Sebastian Vettel",
    osszpont:37,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Kevin Magnussen",
    osszpont:25,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Pierre Gasly,",
    osszpont:23,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Lance Stroll",
    osszpont:18,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Yuki Tsunoda",
    osszpont:12,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Mick Schumacher",
    osszpont:12,
    elsoHelyezesekSzama:0,
    polePosition:1,
   },
   {
    nev:"Guanyu Zhou",
    osszpont:6,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Alexander Albon",
    osszpont:4,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Nyck de Vries",
    osszpont:2,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
   {
    nev:"Nicholas Latifi",
    osszpont:2,
    elsoHelyezesekSzama:0,
    polePosition:0,
   },
];
}

export interface PilotaInfo{
nev:string,
osszpont:number,
elsoHelyezesekSzama:number,
polePosition:number
}
