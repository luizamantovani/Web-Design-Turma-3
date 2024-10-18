let arrayImpares = function(seuArray){
    let arrayNovo = [];
    let i = 0;
    for(let item in seuArray){
        if(seuArray[item]%2!==0){
            arrayNovo[i] = seuArray[item];
            i++;
        }
    }

    return arrayNovo;
}

let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let meuArray2 = arrayImpares(meuArray);
console.log(meuArray2);