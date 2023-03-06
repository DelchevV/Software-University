function ticket(day, age){
    let price;
    if (day==="Weekday"){
        if (age<0 || age>122){
            return console.log("Error!")
        }
        else if (age>=0 && age<=18){
            price=12;
        }
        else if (age<=64){
            price= 18;
        }
        else if(age<=122){
            price=12;
        }

    }

    if (day==="Weekend"){
        if (age<0 || age>122){
            return console.log("Error!")
        }
        else if (age>=0 && age<=18){
            price=15;
        }
        else if (age<=64){
            price= 20;
        }
        else if(age<=122){
            price=15;
        }
    }
    if (day==="Holiday"){
        if (age<0 || age>122){
            return console.log("Error!")
        }
        else if (age>=0 && age<=18){
            price=5;
        }
        else if (age<=64){
            price= 12;
        }
        else if(age<=122){
            price=10;
        }
        
    }
    console.log(`${price}$`)
}   
ticket("Holiday", 15) 
