import { Component } from '@angular/core';

@Component({
  selector: 'app-helsinki',
  templateUrl: './helsinki.component.html',
  styleUrls: ['./helsinki.component.css']
})
export class HELSINKIComponent {
  eredmenyek:HelsinkiAdat[] = [
  { helyezes:1,
    meret:1,
    sportag:"Atletika",
    versenyszam:"Kalapácsvetés"},
  { helyezes:1,
    meret:1,
    sportag:"Úszas",
    versenyszam:"400m gyorsúszás"},
  { helyezes:1,
    meret:1,
    sportag:"Birkozás",
    versenyszam:"Kötött fogás légsúly"},
  { helyezes:1,
    meret:1,
    sportag:"Torna",
    versenyszam:"Talajtorna"},
  { helyezes:1,
    meret:1,
    sportag:"Torna",
    versenyszam:"Felemás korlát"},
  { helyezes:1,
    meret:1,
    sportag:"Vívás",
    versenyszam:"Kardvívás egyéni"},
  { helyezes:1,
    meret:1,
    sportag:"Ökölvívás",
    versenyszam:"Nagyváltósúly"},
  { helyezes:1,
    meret:1,
    sportag:"Úszás",
    versenyszam:"200m mellúszás"},
  { helyezes:1,
    meret:1,
    sportag:"Birkózás",
    versenyszam:"Kötött fogás váltósúly"},
  { helyezes:1,
    meret:1,
    sportag:"Úszás",
    versenyszam:"100m gyoesúszás"},
  { helyezes:1,
    meret:1,
    sportag:"Sportlövészet",
    versenyszam:"Önműködő sportpisztoly"},
  { helyezes:1,
    meret:15,
    sportag:"Labdarúgás",
    versenyszam:"Férfi csapat"},
  { helyezes:1,
    meret:3,
    sportag:"Öttusa",
    versenyszam:"Férfi csapat"},
  { helyezes:1,
    meret:6,
    sportag:"Vívás",
    versenyszam:"Kardvívás csapat"},
  { helyezes:1,
    meret:5,
    sportag:"Úszás",
    versenyszam:"4x100m gyorsúszó váltó"},
  { helyezes:1,
    meret:13,
    sportag:"Vizilabda",
    versenyszam:"Férfi csapat"},
  { helyezes:2,
    meret:1,
    sportag:"Öttusa",
    versenyszam:"Öttusa egyéni"},
  { helyezes:2,
    meret:1,
    sportag:"Vívás",
   versenyszam:"Tőrvívás egyéni"},
  { helyezes:2,
    meret:1,
    sportag:"Vívás",
    versenyszam:"Kardvívás egyéni"},
  { helyezes:2,
    meret:1,
    sportag:"Sporlövészet",
    versenyszam:"Önműködő sportpisztoly"},
  { helyezes:2,
    meret:1,
    sportag:"Úszás",
    versenyszam:"400m gyorsúszás"},
  { helyezes:2,
    meret:1,
    sportag:"Úszás",
    versenyszam:"200m mellúszás"},
  { helyezes:2,
    meret:1,
    sportag:"Kajak kenú",
    versenyszam:"Kenú egyes 10000m"},
  { helyezes:2,
    meret:1,
    sportag:"Kajak kenú",
    versenyszam:"Kenú egyes 1000m"},
  { helyezes:2,
    meret:1,
    sportag:"Bírkozás",
    versenyszam:"Kötött fogály pehelysúly"},
  { helyezes:2,
    meret:8,
    sportag:"Torna",
    versenyszam:"Női összetett csapat"},
  { helyezes:3,
    meret:1,
    sportag:"Sportlővészet",
    versenyszam:"Sportpisztoly"},
  { helyezes:3,
    meret:1,
    sportag:"Vívás",
    versenyszam:"Kardvívás egyéni"},
  { helyezes:3,
    meret:1,
    sportag:"Atlétika",
    versenyszam:"Távolugrás"},
  { helyezes:3,
    meret:1,
    sportag:"Birkozás",
    versenyszam:"Szabad fogás középsúly"},
  { helyezes:3,
    meret:1,
    sportag:"Torna",
    versenyszam:"Felemás korlát"},
  { helyezes:3,
    meret:1,
    sportag:"Torna",
    versenyszam:"Összetett egyéni"},
  { helyezes:3,
    meret:1,
    sportag:"Torna",
    versenyszam:"Gerenda"},
  { helyezes:3,
    meret:1,
    sportag:"Torna",
    versenyszam:"Talajtorna"},
  { helyezes:3,
    meret:1,
    sportag:"Atlétika",
    versenyszam:"Kalapácsvetés"},
  { helyezes:3,
    meret:1,
    sportag:"Atlétika",
    versenyszam:"50km gyaloglás"},
  { helyezes:3,
    meret:1,
    sportag:"Öttusa",
    versenyszam:"Egyéni"},
  { helyezes:3,
    meret:1,
    sportag:"Úszás",
    versenyszam:"100m gyorsúszás"},
  { helyezes:3,
    meret:4,
    sportag:"Atlétika",
    versenyszam:"4x100m váltófutás"},
  { helyezes:3,
    meret:2,
    sportag:"Kajak kenú",
    versenyszam:"Kenú kettes 10000m"},
  { helyezes:3,
    meret:8,
    sportag:"Torna",
    versenyszam:"Kéziszer csapat"},
  { helyezes:3,
    meret:6,
    sportag:"Vívás",
    versenyszam:"Tőrvívás csapat"},
  { helyezes:4,
    meret:1,
    sportag:"Torna",
    versenyszam:"Gerenda"},
  { helyezes:4,
    meret:1,
    sportag:"Úszás",
    versenyszam:"200m mell"},
  { helyezes:4,
    meret:1,
    sportag:"Birkozás",
    versenyszam:"Kötöttfogás félnehézsúly"},
  { helyezes:4,
    meret:1,
    sportag:"Torna",
    versenyszam:"Talaj"},
  { helyezes:4,
    meret:1,
    sportag:"Birkozás",
    versenyszam:"Kötöttfogás középsúly"},
  { helyezes:4,
    meret:1,
    sportag:"Birkozás",
    versenyszam:"Kötöttfogás könnyűsúly"},
  { helyezes:5,
    meret:1,
    sportag:"Ökölvívás",
    versenyszam:"Pehelysúly"},
  { helyezes:5,
    meret:1,
    sportag:"Ökölvívás",
    versenyszam:"Könnyűsúly"},
  { helyezes:5,
    meret:1,
    sportag:"Úszás",
    versenyszam:"100m gyors"},
  { helyezes:5,
    meret:1,
    sportag:"Atlétika",
    versenyszam:"Diszkővetés"},
  { helyezes:5,
    meret:1,
    sportag:"Vívás",
    versenyszam:"Párbajtőr egyéni"},
  { helyezes:5,
    meret:1,
    sportag:"Kajak kenú",
    versenyszam:"Kenú kettes 1000m"},
  { helyezes:5,
    meret:2,
    sportag:"Kerékpározás",
    versenyszam:"Kétüléses verseny"},
  { helyezes:5,
    meret:4,
    sportag:"Úszás",
    versenyszam:"4x200m gyorsváltó"},
  { helyezes:5,
    meret:5,
    sportag:"Vívás",
    versenyszam:"Párbajtőr csapat"},
  { helyezes:6,
    meret:1,
    sportag:"Birkozás",
    versenyszam:"Kötöttfogás légsúly"},
  { helyezes:6,
    meret:1,
    sportag:"Kajak kenú",
    versenyszam:"Egyes 500m"},
  { helyezes:6,
    meret:1,
    sportag:"Torna",
    versenyszam:"Összetett egyéni"},
  { helyezes:6,
    meret:1,
    sportag:"Kerékpározás",
    versenyszam:"Replőverseny"},
  { helyezes:6,
    meret:1,
    sportag:"Úszás",
    versenyszam:"400m gyors"},
  { helyezes:6,
    meret:1,
    sportag:"Torna",
    versenyszam:"Felemáskorlát"},
  { helyezes:6,
    meret:8,
    sportag:"Torna",
    versenyszam:"Összetett csapat"},
]}

  export interface HelsinkiAdat{
  helyezes:number;
  meret: number;
  sportag:string;
  versenyszam:string;
}

