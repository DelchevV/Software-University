function odd_even(number){
    let numbers=String(number).split("").map(Number);
    let even=[];
    let odd=[];
    
    for (let num of numbers) {
        if (num %2 ==0){
            even.push(num)
        }
        else{
            odd.push(num)
        }    
    }
    const evenSum = even.reduce((partialSum, a) => partialSum + a, 0);
    const oddSum = odd.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`) 
}

odd_even(3495892137259234)