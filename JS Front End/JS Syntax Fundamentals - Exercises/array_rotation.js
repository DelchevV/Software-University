function solve(arr, loops){
    for (let index = 0; index < loops; index++) {
        arr.push(arr.shift())
        
    }
    console.log(arr.join(" "))
}

solve([32, 21, 61, 1], 4)