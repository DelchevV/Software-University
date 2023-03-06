function solve(fruit, grams, price){
    let kgs= grams/1000
    let total=kgs*price
    console.log(`I need $${total.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35)