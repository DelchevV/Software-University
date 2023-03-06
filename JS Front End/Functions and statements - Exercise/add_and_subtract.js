function calc(a,b,c){
    const add=(a,b)=> a+b;
    const subtract=(add, c)=> add-c;
    return subtract(add(a,b),c);  
}

console.log(calc(1,17,30))
