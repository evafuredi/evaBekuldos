
<script>
//Füredi Éva 
//1. Feladat megoldása

function hosszEllenor(szoveg)
{
if (szoveg.length<8)
{
return false;
}
return true;
}
document.write("Feladat első teszt eredmény: "+hosszEllenor("teszt"))
document.write("<br>Feladat második teszt eredmény: "+hosszEllenor("feladatteszt"))
</script>

//2. Feladat megoldása
<script>
function tajSzamEllenor(tajszam){
if(tajszam.length!=9){
return false;
}

else{
let paros=(Number(tajszam[1])+Number(tajszam[3])+Number(tajszam[5])+Number(tajszam[7]))*7;
let paratlan=(Number(tajszam[0])+Number(tajszam[2])+Number(tajszam[4])+Number(tajszam[6]))*3;
if ((paros+paratlan)%10==Number(tajszam[8]))
{
return true;
}

return false;
}

}
document.write("Feladat első teszt eredménye: "+tajSzamEllenor("040655330"));
document.write("<br>Feladat második teszt eredménye: "+tajSzamEllenor("111111111"));
document.write("<br>Feladat harmadik teszt eredménye: "+tajSzamEllenor("037687210"));
document.write("<br>Feladat negyedik teszt eredménye: "+tajSzamEllenor("019536646"));
</script>

//3. Feladat megoldása
<script>
function tombTerjedelem(vizsgaltTomb){
let minErtek=vizsgaltTomb[0];
let maxErtek=vizsgaltTomb[0];
for(let i=0;i<vizsgaltTomb.length;i++){
if(vizsgaltTomb[i]<minErtek)
{
minErtek=vizsgaltTomb[i];
}
else if(vizsgaltTomb[i]>maxErtek)

{
maxErtek=vizsgaltTomb[i];
}

else{}

}
return maxErtek-minErtek;
}

let vizsgaltTomb=[3, 5, 10, 16, 9];
document.write("Feladat teszt eredménye: "+tombTerjedelem(vizsgaltTomb));

</script>

//4. Feladat megoldása
<script>
const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]

function legidosebbDolgozo(vizsgaltObjektum){
let legidosebbIndex=0;
for(let i=0;i<vizsgaltObjektum.length;i++)
{
if(vizsgaltObjektum[i].kor>vizsgaltObjektum[legidosebbIndex].kor){legidosebbIndex=i;

}

}

return legidosebbIndex;
}


document.write("Feladat teszt eredménye: "+legidosebbDolgozo(Dolgozok));

</script>

//5. Feladat megoldása
<script>

const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]

function atlagFizetes(vizsgaltObjektum){
let fizetesekOsszege=0;
for(let i=0;i<vizsgaltObjektum.length;i++)
{
fizetesekOsszege+=vizsgaltObjektum[i].fizetes;

}

return Math.round(fizetesekOsszege/vizsgaltObjektum.length);
}



let atlagFizu=atlagFizetes(Dolgozok);
function fizetesEmeles(vizsgaltObjektum){
let ujFizetesek=[];
for(let i=0;i<vizsgaltObjektum.length;i++)
{
let ujElem={...vizsgaltObjektum[i]};
if(vizsgaltObjektum[i].fizetes<atlagFizu)
{
ujElem.fizetes=Math.round(vizsgaltObjektum[i].fizetes*1.1);
}

ujFizetesek.push(ujElem);
}
return ujFizetesek;

}

document.write("Átlagfizetés: "+atlagFizetes(Dolgozok)+" Ft");
document.write("<hr>");


function objektumKiirato(tablazatObjektum){
document.write("<table border=1>");
document.write("<tr>");
document.write("<th>NÉV</th><th>Kor</th><th>Fizetés</th><th>Beosztás</th></tr>");
for(let i=0;i<tablazatObjektum.length;i++){
document.write("<tr>");
document.write("<td>"+tablazatObjektum[i].nev+"</td>");
document.write("<td>"+tablazatObjektum[i].kor+"</td>");
document.write("<td>"+tablazatObjektum[i].fizetes+"</td>");
document.write("<td>"+tablazatObjektum[i].beosztas+"</td>");
}
document.write("</tr>");
document.write("</table>");
}
objektumKiirato(Dolgozok);
document.write("<hr>");
objektumKiirato(fizetesEmeles(Dolgozok));

</script>

