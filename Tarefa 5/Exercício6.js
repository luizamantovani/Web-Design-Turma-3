function dobro(x){
    if(x<=0){
        console.log("Só aceito números positivos maiores que zero");
    } else{
        let aux=x*2;
        console.log("O dobro de "+ x + " é "+aux);
    }
}

dobro(8);