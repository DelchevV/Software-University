function extract(content) {
    text=document.getElementById(content).textContent;
    let foundWords=[];
    for (let index = 0; index < text.length; index++) {
        if(text[index]==="("){
            let start = index
            let word="";
            for (let i = start; i < text.length; i++) {
                word+=text[i];
                if(text[i]===")"){
                    break;
                }  
            }

            word=word.replace("(", "")
            word=word.replace(")", "")
            foundWords.push(word)
        }       
    }
    return foundWords.join("; ")
}