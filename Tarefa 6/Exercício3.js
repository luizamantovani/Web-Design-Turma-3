let somaArray = function(seuArray){
    let soma=0;
    for(let item in seuArray){
        soma+=seuArray[item];
    }
    return soma;
} 

const meuArray = [10, 20, 30, 40, 50];

console.log(somaArray(meuArray));