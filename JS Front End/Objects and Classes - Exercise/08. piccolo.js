function parkingLot(directions) {
    const lot = new Set();
    for (line of directions) {
        let [direct, carNum] = line.split(", ");
        if (direct === "IN") {
            lot.add(carNum)
        } else {
            lot.delete(carNum);
        }
    }
    if (lot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedNums = [...lot].sort();
        console.log(sortedNums.join("\n"));
    }

}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']


)