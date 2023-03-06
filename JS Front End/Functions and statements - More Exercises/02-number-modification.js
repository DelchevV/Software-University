function modificate(number) {
    let numberByDigits = String(number).split("")
    numberByDigits = numberByDigits.map(parseFloat)
    

    let sumOfDigits = numberByDigits.reduce((a, b) => a + b, 0);
    while (sumOfDigits/numberByDigits.length <= 5) {
       
        numberByDigits.push(9)
        // console.log(numberByDigits)

        sumOfDigits = numberByDigits.reduce((a, b) => a + b, 0);

    }
    console.log(numberByDigits.join(""))

}

modificate(101)