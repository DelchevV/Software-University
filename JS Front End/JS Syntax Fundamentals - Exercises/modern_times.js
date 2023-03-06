function solve(str){
    let texts=str.split(" ");

    for (word of texts){
        if (word.length>=2 && word.startsWith("#")){
            if (/\d/.test(word)){
                continue;
            }
            console.log(word.slice(1));
        }  
    }
}
solve('Nowadays everyone uses # to tag a #special1 word in #socialMedia')