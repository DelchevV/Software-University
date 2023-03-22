function solve() {
  const string=document.getElementById('text').value
  const convention=document.getElementById('naming-convention').value
  const output=document.getElementById('result')
  text=string.split(" ");
  let result=[];
  if (convention==="Pascal Case"){
    for (word of text){
      word=word.toLowerCase();
      let upperCase=word[0].toUpperCase();
      word=word.slice(1)
      let newWord=upperCase+word
      result.push(newWord)
    }
    
  }else if(convention==="Camel Case"){
    let firstWord= text.shift();
    firstWord=firstWord.toLowerCase();
    result.push(firstWord)

    for (word of text){
      word=word.toLowerCase();
      let upperCase=word[0].toUpperCase();
      word=word.slice(1)
      let newWord=upperCase+word
      result.push(newWord)
    }
    
  }else{
    result.push('Error!')
  }
  output.textContent=result.join("")
  
}