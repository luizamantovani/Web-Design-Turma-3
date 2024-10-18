let encontraMaiorNumero = function(numeros){
    let maior = Math.max.apply(null, numeros);
    return maior;
}

let meusNumeros = [1, 2, 3, 4, 5, 6, 7, 45, 8, 9]
let maiorNumero = encontraMaiorNumero(meusNumeros);
console.log(maiorNumero);