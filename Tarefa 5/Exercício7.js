let texto1 = "Luiza";

function inverter(texto) { 
    let tam = texto.length; 
    let textoInvertido = '';
    
    for(let i=tam-1; i>=0; i--){
        textoInvertido+=texto[i];
    }
    return textoInvertido;
}

texto1 = inverter(texto1);

console.log(texto1);