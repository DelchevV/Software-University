function loadRepos() {
   let url = "https://api.github.com/users/testnakov/repos"
   const div = document.getElementById('res')

   fetch(url)
      .then(function (response) {

         return response.text();

      })
      .then(function (data) {
         setTimeout(() => {
            div.textContent = data;
         }, "1000");
         console.log('Hello')


      })
      .catch(function () {
         console.log('Went wrong')
      })
}