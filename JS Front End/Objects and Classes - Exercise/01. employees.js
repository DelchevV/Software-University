function solve(arr){
    employees={};
    for(line of arr){
        let name=line;
        let nameLength= line.length;
        employees[name]=nameLength;
    }

    for(key in employees){
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }

}

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]    
    )