function search() {
   const itemList= Array.from(document.querySelectorAll('ul li'))
   const search = document.getElementById('searchText').value
   const result=document.getElementById('result')
   
   let matches=0;
   for (item of itemList){
      text=item.textContent;
      
      if(text.includes(search)){
         item.style.textDecoration="underline";
         item.style.fontWeight='bold';
         matches+=1;
      }
   }
   result.textContent=`${matches} matches found`


}
