function solveInventory(arr) {
    let heroes = []

    for (line of arr) {
        let [name, level, items] = line.split(" / ")
        let hero = {
            name,
            level,
            items
        }

        heroes.push(hero)
    }
    let sortedHeroes = heroes.sort((a, b) => parseInt(a.level) - parseInt(b.level))

    for (hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}


solveInventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
)