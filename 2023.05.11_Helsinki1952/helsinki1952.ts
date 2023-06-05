/*

1. Készítsen programkódot a következő feladatok megoldására, amelynek a forráskódját(állományát) helsinki1952 néven mentse el! (ts, js és html állomány)*/


/*2. Olvassa be a helsinkiAdat.js állományban lévő adatokat és tárolja el egy olyan adatszerkezetben, amely a további feladatok megoldására alkalmas! A fájlban legfeljebb 200 sor lehet.*/


var eredmenyek:string[] = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
  ];

  interface eredmeny{
    helyezes:number;
    meret: number;
    sportag:string;
    versenyszam:string;
}

function Objectumfeltolto(feltoltendoElem:string[]):eredmeny[]{
  var beolvasottAdatok:eredmeny[]=[];
  for(let i:number=0;i<feltoltendoElem.length;i++){
    let darabolandoSor:string[]=feltoltendoElem[i].split(" ");

    let objectum:eredmeny={
      helyezes:Number(darabolandoSor[0]),
      meret:Number(darabolandoSor[1]),
      sportag:darabolandoSor[2],
      versenyszam:darabolandoSor[3],
    }
    beolvasottAdatok.push(objectum);
  
  }
  return beolvasottAdatok;

}

var helsinki:eredmeny[]=Objectumfeltolto(eredmenyek);
/*
function AdatKiiro(adatok:eredmeny[]):void{
  for(let i:number=0;i<adatok.length;i++){
      console.log(adatok[i].helyezes+" - "+adatok[i].meret+" - "+adatok[i].sportag+" - "+adatok[i].versenyszam)
  }
 }

AdatKiiro(helsinki);
*/

/*
3. Határozza meg és írja ki a képernyőre a minta szerint, hogy hány pontszerző helyezést értek el a magyar olimpikonok!*/

function PontszerzoHelyekSzama(adatok:eredmeny[]):number{
  return adatok.length;
}

function PontszerzoHelyekSzamaKiir(helyekSzama:number):void{
  console.log("3. feladat:")
  console.log("Pontszerző helyezések száma: "+helyekSzama);
}

PontszerzoHelyekSzamaKiir(PontszerzoHelyekSzama(helsinki));


/*
4. Készítsen statisztikát a megszerzett érmek számáról, majd összesítse az érmek számát a minta szerint!*/

//TUPLES MEGOLDÁS:

function ErmekSzama(adatok:eredmeny[]):[number,number,number,number]{
  let arany:number=0;
  let ezust:number=0;
  let bronz:number=0;
  
  for(let i:number=0; i<adatok.length; i++){
    if(adatok[i].helyezes==1){
      arany++;
    }

    else if(adatok[i].helyezes==2){
      ezust++;
    }
    
    else if(adatok[i].helyezes==3){
      bronz++;
    }

    else{}
  }
  let osszes:number=arany+ezust+bronz;

  return[arany,ezust,bronz, osszes];
}
//TUPLES KIIRATÓ

function ErmekSzamaKiir(eremMennyiseg:[number,number, number, number]):void{
  console.log("4. feladat:")
  console.log("Arany: "+eremMennyiseg[0]);
  console.log("Ezüst: "+eremMennyiseg[1]);
  console.log("Bronz: "+eremMennyiseg[2]);
  console.log("Összesen: "+eremMennyiseg[3]);
}

ErmekSzamaKiir(ErmekSzama(helsinki));

/*
5. Az olimpián az országokat az elért eredményeik alapján rangsorolják. Az 1−6. helyezéseket olimpiai pontokra váltják, és ezt összegzik. Határozza meg és írja ki a minta szerint az elért olimpiai pontok összegét az alábbi táblázat segítségével!
Helyezés   Olimpiai pont
1.             7
2.             5
3.             4
4.             3
5.             2
6.             1
*/

function SzerzetPont(adatok:eredmeny[]):number{
  let osszPont:number=0;
  for(let i:number=0; i<adatok.length;i++){
    if(adatok[i].helyezes==1){
      osszPont+=7;
    }

    else if(adatok[i].helyezes==2){
      osszPont+=5;
    }

    else if(adatok[i].helyezes==3){
      osszPont+=4;
    }
    
    else if(adatok[i].helyezes==4){
      osszPont+=3;
    }

    else if(adatok[i].helyezes==5){
      osszPont+=2;
    }

    else if(adatok[i].helyezes==6){
      osszPont+=1;
    }
  
    else{}
  }

  return osszPont;
}
  
function SzerzetPontKiir(osszesPont:number):void{
  console.log("5. feladat:")
  console.log("Olimpiai pontok száma: "+osszesPont);
}

SzerzetPontKiir(SzerzetPont(helsinki));


/*
6. Az úszás és a torna sportágakban világversenyeken mindig jól szerepeltek a magyar sportolók. Határozza meg és írja ki a minta szerint, hogy az 1952-es nyári olimpián melyik sportágban szereztek több érmet a sportolók! Ha az érmek száma egyenlő, akkor az „Egyenlő volt az érmek száma” felirat jelenjen meg!*/

function TornaVsUszas(adatok:eredmeny[]):string{
  let torna:number=0;
  let uszas:number=0;
  for(let i:number=0; i<adatok.length;i++){
    if(adatok[i].sportag=="torna" && adatok[i].helyezes<=3){
      torna++;
    }

    else if(adatok[i].sportag=="uszas" && adatok[i].helyezes<=3){
      uszas++;
    }

    else{}
  }
  if(uszas>torna){
    return "uszas"
  }
  else if(torna>uszas){
    return "torna"
  }
  else{
    return "egyenlo"
  }
}

function TornaVsUszasKiir(gyakoribb:string):void{
  console.log("6. feladat:")
  if(gyakoribb=="torna"){
    console.log("Torna sportágban szereztek több érmet ");
  }

  else if(gyakoribb=="uszas"){
    console.log("Úszás sportágban szereztek több érmet ");
  }

  else{
    console.log("Egyenlő volt az érmek száma ");
  }
}

TornaVsUszasKiir(TornaVsUszas(helsinki));

/*
7. Határozza meg, hogy melyik pontszerző helyezéshez fűződik a legtöbb sportoló! Írja ki a minta szerint a helyezést, a sportágat, a versenyszámot és a sportolók számát! Feltételezheti, hogy nem alakult ki holtverseny.*/

function LegtobbSportolo(adatok:eredmeny[]):number{
  let legtobbSportoloIndex:number=0;
  for(let i:number=0; i<adatok.length;i++){
    if(adatok[i].meret>adatok[legtobbSportoloIndex].meret){
      legtobbSportoloIndex=i;
    }
  }
  return legtobbSportoloIndex;
}

function LegtobbSportoloKiir(legnagyobb:number):void{
  console.log("7. feladat:");
  console.log("Helyezés: "+helsinki[legnagyobb].helyezes);
  console.log("Sportág: "+helsinki[legnagyobb].sportag);
  console.log("Versenyszám: "+helsinki[legnagyobb].versenyszam);
  console.log("Sportolók száma: "+helsinki[legnagyobb].meret);
}

LegtobbSportoloKiir(LegtobbSportolo(helsinki));


/*
MINTA A FELADATHOZ:

3. feladat:
Pontszerző helyezések száma: 64
4. feladat: 
Arany: 16
Ezüst: 10
Bronz: 16
Összesen: 42
5. feladat: 
Olimpiai pontok száma: 269
6. feladat:
Torna sportágban szereztek több érmet
7. feladat:
Helyezés: 1
Sportág: labdarugas
Versenyszám: ferfi_csapat
Sportolok száma: 15
*/
