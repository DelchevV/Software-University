function solve(peopleCount, typeOfGroup, weekDay){
    let total;
    if (typeOfGroup==="Students"){
        if(weekDay==="Friday"){
            total=peopleCount*8.45;
        }
        else if(weekDay==="Saturday"){
            total=peopleCount* 9.80;
        }
        else if(weekDay==="Sunday"){
            total=peopleCount* 10.46;
        }

        if (peopleCount>=30){
            total*=0.85
        }
    }
    else if (typeOfGroup==="Business"){
        if (peopleCount>=100){
            peopleCount-=10
        }

        if(weekDay==="Friday"){
            total=peopleCount*10.90;
        }
        else if(weekDay==="Saturday"){
            total=peopleCount* 15.60;
        }
        else if(weekDay==="Sunday"){
            total=peopleCount* 16;
        }
    }
    else if (typeOfGroup==="Regular"){
        

        if(weekDay==="Friday"){
            total=peopleCount*15;
        }
        else if(weekDay==="Saturday"){
            total=peopleCount* 20;
        }
        else if(weekDay==="Sunday"){
            total=peopleCount* 22.50;
        }

        if (peopleCount>=10 && peopleCount<=20){
            total*=0.95
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

solve(100, "Business", "Sunday")
solve(40,
    "Regular",
    "Saturday"
    )

