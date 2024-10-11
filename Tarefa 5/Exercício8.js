let texto = "Luiza";

function qntVogais(palavra) {
    let vogais = 0;
    for (let i = 0; i < palavra.length; i++) {
        if ('aeiou'.includes(palavra[i])) {
            vogais++;
        }
    }
    console.log(vogais);
}

qntVogais(texto);
