function convertToJson(name, lastName, hairColor){
    let obj={
        name,
        lastName,
        hairColor
    }

    let objJson= JSON.stringify(obj)
    console.log(objJson)
}

convertToJson('George', 'Jones', 'Brown')