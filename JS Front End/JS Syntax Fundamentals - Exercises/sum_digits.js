function solve(number){
    let numbers=number.toString().split("");
    let realNums=numbers.map(Number);

    const sum = realNums.reduce(add, 0);

    function add(accumulator, a) {
        return accumulator + a;
      }
    console.log(sum)
}
solve(97561)