function odd(string){
    words=string.split(" ")
    let wordsObjects={};
    let oddOccurrances=[];
    for (word of words){
        word=word.toLowerCase();
        wordsObjects[word]=0;
    }

    
        for(key in wordsObjects){
            for(word of words){
                if (word.toLowerCase()===key.toLowerCase()){
                wordsObjects[key]+=1
            }
        }
    }

    for (key in wordsObjects){
        if(wordsObjects[key]%2!==0){
            oddOccurrances.push(key);
        }
    }

    console.log(oddOccurrances.join(" "))
    
}

odd('Cake IS SWEET is Soft CAKE sweet Food')