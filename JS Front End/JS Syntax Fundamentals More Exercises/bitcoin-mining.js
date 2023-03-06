function mine(foundGold) {
    let day = 0;
    let bitcoinPrice = 11949.16;
    let gramOfGoldPrice = 67.51;
    let money = 0;
    let firstBoughtBitcoin = 0;
    let ownedBitcoins = 0;

    for (gold of foundGold) {

        day += 1;
        if (day % 3 == 0) {
            gold *= 0.7;
        }
        money += gold * gramOfGoldPrice

        let currentBitcoins=0;
        if (money >= bitcoinPrice) {
            
            if (ownedBitcoins === 0) {
                firstBoughtBitcoin = day;
            }
            currentBitcoins += Math.floor(money/bitcoinPrice);
        }
        ownedBitcoins+=currentBitcoins;
        money-=currentBitcoins*bitcoinPrice;
    }

    console.log(`Bought bitcoins: ${ownedBitcoins}`)
    if (ownedBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBoughtBitcoin}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

mine([3124.15, 504.212, 2511.124])