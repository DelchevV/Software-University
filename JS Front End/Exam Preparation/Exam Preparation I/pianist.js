function pianist(input) {
    let numberOfPieces = Number(input.shift())
    let picesObj = {}
    for (let index = 0; index < numberOfPieces; index++) {
        line = input.shift()
        let [title, composer, key] = line.split('|')
        picesObj[title] = { composer, key }
    }
    for (line of input) {
        let info = line.split("|")

        if (info[0] === "Add") {
            let [command, title, composer, key] = info
            if (info[1] in picesObj) {
                console.log(`${info[1]} is already in the collection!`)
            } else {

                picesObj[title] = { composer, key }
                console.log(`${title} by ${composer} in ${key} added to the collection!`)
            }
        }
        if (info[0] === "Remove") {
            let [command, title] = info
            if (title in picesObj) {
                delete picesObj[title];
                console.log(`Successfully removed ${title}!`)
            } else {
                console.log(`Invalid operation! ${title} does not exist in the collection.`)
            }
        }

        if (info[0] === "ChangeKey") {
            let [command, piece, newKey] = info
            if (piece in picesObj) {
                picesObj[piece].key=newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`)

            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }

        }

        if (info[0]==="Stop"){
            for (line in picesObj){
                console.log(`${line} -> Composer: ${picesObj[line].composer}, Key: ${picesObj[line].key}`)
            }
        }
    }



}


pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )