function solve(string, text){
    text=text.split(" ")
    for(word of text){
        if (word.toLowerCase()===string.toLowerCase()){
            console.log(string);
            return;
        }
    }
    console.log(`${string} not found!`)
}

solve('python',
'JavaScript is the best programming language'

)