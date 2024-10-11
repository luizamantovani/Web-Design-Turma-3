let email = "luizamantovani@2006gmail.com";

function isEmail(nome){
    let sign=0;
    let dot=0;
    for(let i=0; i<nome.length; i++){
        if("@".includes(nome[i])){
            sign++;
        }
    }
    if(sign>0){
        let emailSplit = nome.split("@");
        for(i=0; i<emailSplit[1].length; i++){
            if (emailSplit[1][i] === '.') {
                dot++;
            }
        }
    }


    if(sign===1 && dot>0){
       return true;
    } else{
        return false;
    }
}

console.log(isEmail(email));