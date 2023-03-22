function loadRepos() {
const repos = document.getElementById('repos')

	username= document.getElementById('username')

	let url = "https://api.github.com/users/"+username.value +"/repos"
	

	fetch(url)
	.then(function(response){
		return response.json()
	})
	.then (function(data){
		printRepos(data)	
	})

	function printRepos(data){

		while (repos.firstChild) {
            repos.removeChild(repos.firstChild);
          }
		let arrFromData=Array.from(data)
		for(el of arrFromData){
			let li= document.createElement("li")
			let a= document.createElement('a')
			a.textContent=el.full_name
			a.href=el.html_url
			console.log(a)
			li.appendChild(a)
			repos.appendChild(li)
		}
	}
}