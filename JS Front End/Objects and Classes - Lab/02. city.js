function city(object){
    for (obj in object){
        console.log(`${obj} -> ${object[obj]}`)
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)