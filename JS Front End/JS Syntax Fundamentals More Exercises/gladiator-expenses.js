function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmors = 0;

    for (let round = 1; round < lostFights + 1; round++) {
        if (round % 2 === 0) {
            brokenHelmets += 1;
        }
        if (round % 3 === 0) {
            brokenSwords += 1;
        }
        if (round % 6 === 0) {
            brokenShields += 1;
        }
    }
    brokenArmors = Math.floor(brokenShields / 2);

    totalPrice = brokenHelmets * helmetPrice +
        brokenSwords * swordPrice +
        brokenShields * shieldPrice +
        brokenArmors * armorPrice

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}

expenses(23,
    12.50,
    21.50,
    40,
    200

)

