<<<<<<< HEAD
function solve(number){
    let numbers=number.toString().split("");
    let realNums=numbers.map(Number);

    const sum = realNums.reduce(add, 0);

    function add(accumulator, a) {
        return accumulator + a;
      }
    console.log(sum)
}
=======
function solve(number){
    let numbers=number.toString().split("");
    let realNums=numbers.map(Number);

    const sum = realNums.reduce(add, 0);

    function add(accumulator, a) {
        return accumulator + a;
      }
    console.log(sum)
}
>>>>>>> ab94c66f51bce0397e6d8d263f78e25cd9d3629d
solve(97561) 