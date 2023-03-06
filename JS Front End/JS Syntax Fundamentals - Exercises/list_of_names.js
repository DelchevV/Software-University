function solve(arr){
    let array=[...arr];
    array.sort();
    let counter=1;
    for (const name of array){
        console.log(`${counter}.${name}`);
        counter++;
    }
}
solve(["John", "Bob", "Christina", "Ema"])

