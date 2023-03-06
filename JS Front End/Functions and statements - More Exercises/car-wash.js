function cleanCar(data) {
    let cleaness = 0;
    for (command of data) {
        switch (command) {
            case "soap":
                cleaness += 10;
                break;
            case "water":
                cleaness *= 1.2;
                break;
            case "vacuum cleaner":
                cleaness *= 1.25;
                break;
            case "mud":
                cleaness *= 0.9;
                break;
        }
    }
    console.log(`The car is ${cleaness.toFixed(2)}% clean.`)
}
cleanCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
cleanCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])