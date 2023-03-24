function loadCommits() {
    let username = document.getElementById('username')
    let repository = document.getElementById('repo')
    let commits = document.getElementById('commits')
    let url = 'https://api.github.com/repos/' + username.value + '/' + repository.value + '/commits'
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            dataHandler(data)
        })
        .catch((err)=> {
            console.log('wrong')
             let li = document.createElement('li')
            li.textContent = `Error: ${err.message}`
            commits.appendChild(li)
        })

    function dataHandler(data) {
        info = Array.from(data)
        for (el of info) {
            let name = el.commit.author.name
            let message = el.commit.message
            let li = document.createElement('li')
            li.textContent = `${name}: ${message}`
            commits.appendChild(li)
        }
    }

}