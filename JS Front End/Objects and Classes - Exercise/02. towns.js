function solveTown(arr){
    for (line of arr){
        let [town, latitude, longitude]=line.split(" | ");
       latitude=Number(latitude).toFixed(2);
       longitude=Number(longitude).toFixed(2);
        let townObj={
            town,
            latitude,
            longitude
        }
        console.log(townObj)
    }
}

solveTown(['Plovdiv | 136.45 | 812.575']
)