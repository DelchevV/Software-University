function solve(string, text){
    let words=string.split(", ");
    let template="*";
    for(let word of words){
        template="*";
        template=template.repeat(word.length);
        text=text.replace(template, word);

    }
    console.log(text);
}


solve('great, learning',
'softuni is ***** place for ******** new programming languages')
