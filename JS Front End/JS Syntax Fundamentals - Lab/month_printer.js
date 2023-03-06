function month(integer){
    switch(integer){
        case 1:
            return console.log("January");
        case 2:
            return console.log("February");
        case 3:
            return console.log("March");
        case 4:
            return console.log("April");
        case 5:
            return console.log("May");
        case 6:
            return console.log("Jun");
        case 7:
            return console.log("July");
        case 8:
            return console.log("August");
        case 9:
            return console.log("September");
        case 10:
            return console.log("Octomber");
        case 11:
            return console.log("November");
        case 12:
            return console.log("December");
        default:
            console.log("Error!")
    }
}

month(1)
month(8)
month(123)
month(-1)