function solve(integer){
    let numbers=integer.toString().split("");
    let real_numbers=numbers.map(Number)
    
    let is_same=true;
    const sum = real_numbers.reduce(add, 0);

    function add(accumulator, a) {
        return accumulator + a;
      }

    for (let index = 0; index < real_numbers.length; index++) {
        if (real_numbers[0]!==real_numbers[index]){
            is_same=false;
        }
        
    }
    console.log(is_same)
    console.log(sum)
}
solve(1234)