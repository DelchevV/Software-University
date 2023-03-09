function solveWords(wordsArr) {
    let seek={};
    
    let searchedWords = wordsArr.shift()
    searchedWords=searchedWords.split(" ")
    for (word of searchedWords){
         seek[word]=0;
        for(w of wordsArr){
            if (w===word){
                seek[word]+=1
            }
        }
    }
    let seekArr=[];
    for(const [word, count] of Object.entries(seek).sort((a,b)=>b[1]-a[1])){
        console.log(`${word} - ${count}`);
    }
    
}

solveWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task', 'sentence','sentence'
    ]
    )