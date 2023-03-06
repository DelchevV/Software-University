function calc(first_num, second_num, operator){
    switch (operator){
        case "-":
            return console.log(first_num-second_num);
        case "+":
            return console.log(first_num+second_num);
        case "*":
            return console.log(first_num*second_num);
        case "**":
            return console.log(first_num**second_num);
        case "/":
            return console.log(first_num/second_num);
        case"%":
            return console.log(first_num%second_num);
    }
}

calc(2,2, "+")