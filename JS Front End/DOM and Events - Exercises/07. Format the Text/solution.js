function solve() {
  const input=document.getElementById('input');
  const output=document.getElementById('output');
  let sentences= input.value.split(".")
  let numberOfParagraphs=Math.ceil(sentences.length/3)
  

  let allParagraphs=[];

  for (let index = 0; index < numberOfParagraphs; index++) {

    let currentP=document.createElement("p")

    for (let index = 0; index < 3; index++) {
      if(sentences.length===0){
        break
      }
      let p= sentences.shift()
      currentP.textContent+= p+". "

    }

    allParagraphs.push(currentP)   
  }

  let lastEl=allParagraphs.pop()
  let editedTex=lastEl.textContent.replace(". .",".")
  lastEl.textContent=editedTex
  allParagraphs.push(lastEl)

  
  for (p of allParagraphs){
    output.appendChild(p)
  }
}