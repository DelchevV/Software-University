function solve(start,end){
    let numbers=[];
    for (let index = start; index < end+1; index++) {
        numbers.push(index);  
    }
    
    const sum = numbers.reduce(add, 0);

    function add(accumulator, a) {
        return accumulator + a;
      }

    console.log(numbers.join(" "));
    console.log(`Sum: ${sum}`)
}
solve(0,26)