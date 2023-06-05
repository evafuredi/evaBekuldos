/*Az alábbi feladatokhoz tartozó függvényeket, készítsd el typescript segítségével, fordítsd le JS-re, és próbálj hozzájuk Unit teszteket készíteni*/

/*1)EkezetesBetukSzama(modositandoSzoveg)
Készíts egy függvényt ami a kapott szövegben megszámolja, mennyi ékezetes betű van benne.*/

function EkezetesBetukSzama(vizsgalandoSzoveg:string):number{
    let ekezetesBetuk:string[]=['á','é','í','ó','ö','ő','ú','ü','ű','Á','É','Í','Ó','Ö','Ő','Ú','Ü','Ű'];
    let ekezetesBetukSzama:number=0;
    for(let i:number=0;i<vizsgalandoSzoveg.length;i++){
        let szerepelE=false;
        for(let j:number=0;j<ekezetesBetuk.length;j++){
            if(ekezetesBetuk[j]==vizsgalandoSzoveg[i]){
                szerepelE=true;
            }
        }
        if(szerepelE==true){
            ekezetesBetukSzama++;
        }
    }
    return ekezetesBetukSzama;
}

/*

VAGY

function EkezetesBetukSzama(vizsgalandoSzoveg:string):number{
    const ekezetesBetuk:string[] = ["á", "é", "í", "ó","ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    let ekezetesBetukMennyisege:number=0;
    for(let i:number=0;i<vizsgalandoSzoveg.length;i++){
        for(let j:number=0;j<ekezetesBetuk.length;j++){
            if(vizsgalandoSzoveg[i]==ekezetesBetuk[j]){
                ekezetesBetukMennyisege++;
            }
        }
    }
    return ekezetesBetukMennyisege;
}*/


/*2)camelCaseGenerator(modositandoSzoveg)
Készíts egy függvényt, ami a bemenetinek kapott szövegből camelCase szöveget hoz létre!*/

function camelCaseGenerator(modositandoSzoveg:string):string{
    let ujSzoveg:string="";
    let szovegElemek:string[]=modositandoSzoveg.split(" ");
    for(let i:number=0;i<szovegElemek.length;i++){
        if(i==0){
            ujSzoveg+=szovegElemek[i][0].toLowerCase()
        }
        else{
            ujSzoveg+=szovegElemek[i][0].toUpperCase()
        }
        for(let j:number=1;j<szovegElemek[i].length;j++)
        {
            ujSzoveg+=szovegElemek[i][j].toLowerCase();
        }
    }
    return ujSzoveg;
}


/*3) PrimLista(vizsgaltTomb)
Készíts egy függvényt, ami kiírja melyek a prímszámok a vizsgált tömbödben, ha van ilyen, ha nincs akkor térjen vissza a "Nincs prímszám a tömbben" szöveggel*/

function PrimLista(vizsgaltTomb:number[]):any{
    let primekListaja:number[]=[];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let oszto:number=0;
        for(let j=1;j<=vizsgaltTomb[i];j++){
            if(vizsgaltTomb[i]%j==0){
                oszto++;
            }
        }
        if(oszto==2){
            primekListaja.push(vizsgaltTomb[i]);
        }
        else{}
    }    
    if(primekListaja.length==0){
        return "Nincs prímszám a tömbben";
    }
    else {
        return primekListaja.toString();
    }
}
