function convert(string){
    let jsonString=JSON.parse(string)

    for (el in jsonString){
        console.log(`${el}: ${jsonString[el]}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}')