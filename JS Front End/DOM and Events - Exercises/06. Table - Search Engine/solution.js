function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const allTds = Array.from(document.querySelectorAll("tbody td"));
      const searchedWord = document.getElementsByTagName("input")[0];

      for (td of allTds) {
         let tr = td.parentElement;

         if (tr.classList = "select");
         tr.classList.remove("select");
      }

      for (td of allTds) {
         let tr = td.parentElement;
         if (td.textContent.toLowerCase().includes(searchedWord.value.toLocaleLowerCase()))
            if (searchedWord.value.length > 0) {
               tr.classList.add("select")
            }
      }
      searchedWord.value = "";

   }
}