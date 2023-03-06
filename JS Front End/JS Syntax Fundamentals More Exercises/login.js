function validateLogin(inputArr) {
    let username = inputArr.shift();
    let password = username.split("").reverse().join("");

    let wrongGuesses = 0;
    for (word of inputArr) {


        if (word !== password) {
            wrongGuesses += 1;
            if (wrongGuesses === 4) {
                console.log(`User ${username} blocked!`)
                break;
            }

            console.log("Incorrect password. Try again.")
        } else {
            console.log(`User ${username} logged in.`)
        }
    }
}


validateLogin(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])