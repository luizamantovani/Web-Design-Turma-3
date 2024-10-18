let endereco = {
    "rua" : "Élio Rabano Sanches",
    "numero" : "280",
    "bairro" : "Ibiti",
    "cidade" : "Sorocaba",
};

for(let item in endereco){
    item.replace(/"/g, "");
    console.log(item + " : " + endereco[item]);
}