let nome = "Luiza Maria Mantovani";
let nomeSeparado = nome.split(" ");
let ultimoNome;
let qntNomes = nomeSeparado.length;

let primeiroNome = nomeSeparado[0];

for(let i=0; i<=qntNomes; i++){
    if(i==qntNomes){
        ultimoNome = nomeSeparado[i-1];
    }
}

console.log(primeiroNome+"."+ultimoNome+"@facens.br");