function meet(arr) {
    let meetings = {};

    for (line of arr) {
        let [date, name] = line.split(" ");
        if (meetings.hasOwnProperty(date)) {
            console.log(`Conflict on ${date}!`)
        }
        else {
            meetings[date] = name
            console.log(`Scheduled for ${date}`)
        }

    }

    for (key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

meet(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

)