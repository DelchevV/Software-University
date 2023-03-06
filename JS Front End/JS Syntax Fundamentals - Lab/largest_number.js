function largest(first, second, third){
    let bigest;
    if (first>second && first>third){
        bigest=first;
    }
    else if  (second>first && second> third) {
        bigest=second;
    } else {
        bigest=third
    }
    console.log(`The largest number is ${bigest}.`)
}

largest(-3,-5,-22.5)