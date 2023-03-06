function mining(yield) {
    let spice = 0;
    let day = 0;
    while (yield >= 100) {
        spice += yield - 26;
        yield -= 10;
        day += 1;
    }
    if (spice >= 26) {
        spice -= 26;
    } else
        spice = 0
    
    console.log(day);
    console.log(spice);
}

mining(450)