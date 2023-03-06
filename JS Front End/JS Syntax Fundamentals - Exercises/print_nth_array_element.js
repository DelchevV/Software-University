function solve(arr, step){
    let numbers=[]
    for (let index = 0; index < arr.length; index+=step) {
        numbers.push(arr[index])
    }
    return numbers
}
solve(['1', 
'2',
'3', 
'4', 
'5'], 
6


)