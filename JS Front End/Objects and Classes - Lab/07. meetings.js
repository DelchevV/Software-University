<<<<<<< HEAD
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

=======
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

>>>>>>> ab94c66f51bce0397e6d8d263f78e25cd9d3629d
)