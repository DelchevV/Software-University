function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students'
  const submit = document.getElementsByTagName('button')[0]
  const tbody = document.getElementsByTagName('tbody')[0]

  loadEntities()

  submit.addEventListener('click', submitHandler)

  function loadEntities() {
    tbody.innerHTML = ""
    fetch(BASE_URL)
      .then((info) => {
        return info.json()
      })
      .then((data) => {
        for (line in data) {
          console.log(data[line])
          let tr = document.createElement('tr')
          let firstTd = document.createElement('td')
          let seconTd = document.createElement('td')
          let thirdTd = document.createElement('td')
          let forthTd = document.createElement('td')

          firstTd.textContent = data[line].firstName
          seconTd.textContent = data[line].lastName
          thirdTd.textContent = data[line].facultyNumber
          forthTd.textContent = data[line].grade

          tr.appendChild(firstTd)
          tr.appendChild(seconTd)
          tr.appendChild(thirdTd)
          tr.appendChild(forthTd)

          tbody.appendChild(tr)

        }
      })
  }


  function submitHandler() {
    const firstName = document.querySelector('input[name="firstName"]').value
    const lastName = document.querySelector('input[name="lastName"]').value
    const facultyNumber = document.querySelector('input[name="facultyNumber"]').value
    const grade = document.querySelector('input[name="grade"]').value

    let httpHeader = {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    }
    fetch(BASE_URL, httpHeader)
      .then(() => {
        loadEntities()
      })
  }
}

attachEvents();