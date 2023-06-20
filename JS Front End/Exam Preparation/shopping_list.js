function solve(list) {
    let products = list.shift().split('!')
    for (line of list) {
        if (line === "Go Shopping!") {
            return console.log(products.join(", "))
        }
        let [command, product, newItem] = line.split(' ')
        if (command === "Urgent") {
            if (!products.includes(product)) {
                products.unshift(product)
            }
        } else if (command === "Unnecessary") {
            if (products.includes(product)) {
                let index = products.indexOf(product)
                products.splice(index,1)

            }
        }
        else if (command === "Correct") {
            if (products.includes(product)) {
                let index = products.indexOf(product)
                products[index] = newItem
            }

        }
        else if (command === "Rearrange") {
            if (products.includes(product)) {
                
                let index = products.indexOf(product)
                removedProduct=products[index]
                products.splice(index,1)
                products.push(removedProduct)
            }
        }

    }
}

// solve((["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
// )

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Milk",
"Correct Onion Potatoes",
"Go Shopping!"])


function shoppingList(list) {
    let cart = list.shift().split('!')

    function removeItem (item) {
        cart.splice(cart.indexOf(item), 1)
    }

    list.forEach((x) => {
        let [command, item, newItem] = x.split(' ')

        if (command === 'Urgent') {

            if (!cart.includes(item)) {
                cart.unshift(item)
            }

        } else if (command === 'Unnecessary') {

            if (cart.includes(item)) {
                removeItem(item)
            }
        } else if (command === 'Correct') {

            if (cart.includes(item)) {
                cart[cart.indexOf(item)] = newItem
            }
        } else if (command === 'Rearrange') {

            if (cart.includes(item)) {
                removeItem(item)
                cart.push(item)
            }
        } else {
            console.log(`${cart.join(', ')}`)
        }
    })
}