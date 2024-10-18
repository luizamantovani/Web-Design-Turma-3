let produto = {
    "nome" : "Coca-Cola 2L",
    "preco" : 10.00,
    "quantidade" : 5,
    calcularTotal : function(){
        return produto.preco*produto.quantidade
    } 
};

let precoTotal = produto.calcularTotal();
console.log(precoTotal);