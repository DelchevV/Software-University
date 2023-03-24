function attachEvents() {
    const loadBtn = document.getElementById('btnLoad')
    const phoneBook = document.getElementById('phonebook')
    const personInput = document.getElementById('person')
    const phoneInput = document.getElementById('phone')
    const createBtn = document.getElementById('btnCreate')
    createBtn.addEventListener('click', createHandler)
    let url = 'http://localhost:3030/jsonstore/phonebook/'
    loadBtn.addEventListener('click', loadHandler)

    function createHandler() {
        let phone = phoneInput.value;
        let person = personInput.value;
        let httpHeader = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }

        fetch(url, httpHeader)
            .then((resolve) => {
                phoneBook.innerHTML = ''
                loadHandler()
                personInput.value = ''
                phoneInput.value = ''
            })
            .catch((err) => {
                console.error(err)
            })


    }

    function loadHandler() {
        fetch(url)
            .then((resolve) => {
                return resolve.json()
            })
            .then((data) => {
                loadAllEntries(data)
            })
            .catch((err) => {
                console.error(err)
            })
    }


    function loadAllEntries(data) {
        for (user in data) {
            let name = data[user].person
            let phone = data[user].phone
            let id = data[user]._id

            let li = document.createElement('li')
            li.textContent = `${name}: ${phone}`
            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.id = id
            deleteBtn.addEventListener('click', deleteHandler)
            li.appendChild(deleteBtn)
            phoneBook.appendChild(li)
        }
    }

    function deleteHandler(e) {
        const btn = e.currentTarget
        phoneBook.innerHTML = ""

        const httpHeader = {
            method: "DELETE"
        }

        fetch(`${url}${btn.id}`, httpHeader)
            .then((resolve) => {
                loadHandler()
            })
            .catch((err) => {
                console.error(err)
            })

    }

}

attachEvents();