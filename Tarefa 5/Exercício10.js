let texto1 = "Luiza";
let texto2 = "Arara";

function palindromo(texto) {
    texto = texto.toLowerCase(); 
    let tam = texto.length; 
    
    
    for (let i = 0, j = tam - 1; i < j; i++, j--) {
        if (texto[i] !== texto[j]) { 
            return false; 
        }
    }
    return true; 
}

console.log(palindromo(texto1)); // false
console.log(palindromo(texto2)); // true
