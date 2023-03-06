function devision(num1, num2) {

    let num1Factorial = factorial(num1);
    let num2Factorial = factorial(num2);
    console.log((num1Factorial / num2Factorial).toFixed(2))

    function factorial(a) {
        result = 1;

        for (let index = a; index > 0; index--) {
            result *= index;
        }

        return result;
    }
}

devision(6, 2)