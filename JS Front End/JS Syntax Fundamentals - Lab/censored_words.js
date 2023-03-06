function censor(text,word){
    let new_text=text;
    str="*"
    while (new_text.includes(word)){
        new_text=new_text.replace(word, str.repeat(word.length))
    }
    
    console.log(new_text)
}

censor('A small sentence with some words small', 'small')