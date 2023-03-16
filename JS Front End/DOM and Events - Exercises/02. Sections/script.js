function create(words) {
   const divContent=document.getElementById("content");
   for (w of words){
      let div = document.createElement('div')
      let p = document.createElement('p');
      
      p.textContent=w;
      p.style.display="none";

      div.addEventListener('click', ()=>{
         p.style.display="block"
      })
      
      div.appendChild(p);     
      divContent.appendChild(div);
   }
   


}