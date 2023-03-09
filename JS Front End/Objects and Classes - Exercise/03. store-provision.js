function storeProvisions(stock, order){
    let products={};

    for (let index = 0; index < stock.length; index+=2) {
        let product=stock[index];
        let quantity =Number(stock[index+1])
        products[product]=quantity
    }

    for (let index = 0; index < order.length; index+=2) {
        let product=order[index];
        let quantity =Number(order[index+1])
        if(products.hasOwnProperty(product)){
            products[product]+=quantity
        }
        else{
            products[product]=quantity
        }   
    }

    for(key in products){
        console.log(`${key} -> ${products[key]}`)
    }
}

storeProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )