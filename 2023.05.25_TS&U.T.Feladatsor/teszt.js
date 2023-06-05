function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}


function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma", "Ez a kód jól működik", 4, EkezetesBetukSzama("Ez a kód jól működik"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Ez a kód jól működik", 4);
    }
}


function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma", "Két ékezet van benne", 2, EkezetesBetukSzama("Két ékezet van benne"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Két ékezet van benne", 2);
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma", "Szeretem a programozást", 1, EkezetesBetukSzama("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Szeretem a programozást", 1);
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("camelCase generátor", "Ez egy változó", "ezEgyVáltozó", camelCaseGenerator("Ez egy változó"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("camelCase generátor", "Ez egy változó", "ezEgyVáltozó");
    }
}


function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("camelCase generátor", "Kemöl Kéz Szöveg", "kemölKézSzöveg", camelCaseGenerator("Kemöl Kéz Szöveg"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("camelCase generátor", "Kemöl Kéz Szöveg", "kemölKézSzöveg");
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("camelCase generátor", "Tamásnak csak jó ötletei vannak", "tamásnakCsakJóÖtleteiVannak", camelCaseGenerator("Tamásnak csak jó ötletei vannak"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("camelCase generátor", "Tamásnak csak jó ötletei vannak", "tamásnakCsakJóÖtleteiVannak");
    }
}


function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Prímszámok listája adott tömbben", [4,6,15,21,32], "Nincs prímszám a tömbben", PrimLista([4,6,15,21,32]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímszámok listája adott tömbben", [4,6,15,21,32], "Nincs prímszám a tömbben");
    }
}

function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Prímszámok listája adott tömbben", [3,7,20,50], [3,7], PrimLista([3,7,20,50]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímszámok listája adott tömbben", [3,7,20,50], [3,7]);
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Prímszámok listája adott tömbben", [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127], [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127], PrimLista([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímszámok listája adott tömbben", [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127], [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127]);
    }
}

function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
}
TesztFuttato();