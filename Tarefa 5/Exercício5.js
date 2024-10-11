let num;

for (let i = 1; i < 11; i++) {
    if(i == 1){
        num = `${i}-`
    }else if (i == 10) {
        num += i;
    }else{
        num = `${num}${i}-`
    }
    
}

console.log(num);