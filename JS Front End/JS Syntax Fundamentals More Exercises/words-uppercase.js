function uppercase(string){
    let regex=/([A-z0-9]+)/g;
    let foundWords = [...string.matchAll(regex)]
    
    let upperCasedWords=[]
    for (let index = 0; index < foundWords.length; index++) {
        upperCasedWords.push(foundWords[index][0].toUpperCase()) 
    }

    console.log(upperCasedWords.join(", "))
}  

uppercase('hello')