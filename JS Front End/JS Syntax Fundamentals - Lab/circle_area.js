function circle(number){
    let pi= 3.14159265359;
    if (typeof number === "number"){
        let result= pi * number**2
        console.log(result.toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof number}.`)
    }
}

circle("fff")