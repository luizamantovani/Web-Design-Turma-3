let a = 10;
let b = 5;

function soma(x, y){
    let aux = x + y;
    console.log(x+"+"+y+"="+aux);
}

function sub(x, y){
    let aux = x-y;
    console.log(x+"-"+y+"="+aux);
}

function mult(x, y){
    let aux = x*y;
    console.log(x+"*"+y+"="+aux);
}

function div(x, y){
    let aux = x/y;
    console.log(x+"/"+y+"="+aux);
}

soma(a, b);
sub(a, b);
mult(a, b);
div(a, b);