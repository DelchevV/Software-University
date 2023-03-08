<<<<<<< HEAD
function convert(string){
    let jsonString=JSON.parse(string)

    for (el in jsonString){
        console.log(`${el}: ${jsonString[el]}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')
=======
function convert(string){
    let jsonString=JSON.parse(string)

    for (el in jsonString){
        console.log(`${el}: ${jsonString[el]}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')
>>>>>>> ab94c66f51bce0397e6d8d263f78e25cd9d3629d
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}')