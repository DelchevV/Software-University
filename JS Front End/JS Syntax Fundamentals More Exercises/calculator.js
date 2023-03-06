function calculate(num1, operator, num2) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    const calcMap = {
        "+": add,
        "-": subtract,
        "/": divide,
        "*": multiply
    }

    console.log(calcMap[operator](num1, num2).toFixed(2))
}

calculate(25.5,
    '-',
    3
    )