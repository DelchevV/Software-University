// function attachEvents() {
//   const loadBooksBtn = document.getElementById("loadBooks")
//   const tbody = document.getElementsByTagName('tbody')[0]
//   const submitBtn = document.querySelector('#form button')
//   const h3 = document.querySelector('h3')
//   const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/'
//   let editCurrentID = null;

//   loadBooksBtn.addEventListener('click', loadBooksHandler)
//   submitBtn.addEventListener('click', submitHandler)

//   function submitHandler() {

//     const [titleInput, authorInput] = Array.from(document.querySelectorAll("input"))
//     let title = titleInput.value
//     let author = authorInput.value

//     if (submitBtn.textContent == "Submit") {
//       const httpHeader = {
//         method: "POST",
//         body: JSON.stringify({ title, author })
//       }

//       fetch(BASE_URL, httpHeader)
//         .then((resovle) => {
//           loadBooksHandler()
//         })

//     } else if (submitBtn.textContent == "Save") {
//       const httpHeader = {
//         method: "PUT",
//         body: JSON.stringify({ title, author })
//       }

//       fetch(`${BASE_URL}${editCurrentID}`, httpHeader)
//         .then((resovle) => {
//           loadBooksHandler()
//         })

//       h3.textContent = "FORM"
//       submitBtn.textContent = "Submit"

//     }

//     titleInput.value = ""
//     authorInput.value = ""
//   }

//   function loadBooksHandler() {
//     tbody.innerHTML = ""
//     fetch(BASE_URL)
//       .then((info) => {
//         return info.json()
//       })
//       .then((data) => {
//         for (line in data) {
//           let tr = document.createElement("tr")
//           let firstTd = document.createElement('td')
//           let secondTd = document.createElement('td')
//           let thirdTd = document.createElement('td')
//           let editBtn = document.createElement('button')
//           let deleteBtn = document.createElement('button')

//           editBtn.addEventListener('click', editHandler)
//           deleteBtn.addEventListener('click', deleteHandler)
//           editBtn.textContent = "Edit"
//           deleteBtn.textContent = "Delete"
//           deleteBtn.id = line
//           editBtn.id = line
//           firstTd.textContent = data[line].title
//           secondTd.textContent = data[line].author
//           thirdTd.appendChild(editBtn)
//           thirdTd.appendChild(deleteBtn)
//           tr.appendChild(firstTd)
//           tr.appendChild(secondTd)
//           tr.appendChild(thirdTd)
//           tbody.appendChild(tr)
//         }
//       })
//   }

//   function editHandler() {
//     h3.textContent = "Edit FORM"
//     submitBtn.textContent = "Save"
//     editCurrentID = this.id
//   }

//   function deleteHandler() {
//     let id = this.id
//     let httpHeader = {
//       method: "DELETE"
//     }
//     fetch(`${BASE_URL}${id}`, httpHeader)
//       .then(() => {
//         loadBooksHandler()
//       })
//   }
// }

// attachEvents();

async function attachEvents() {
  const dbBooks = 'http://localhost:3030/jsonstore/collections/books'
  const loadBooksBtn = document.querySelector('#loadBooks')
  const form = document.querySelector('#form')
  const h3 = form.querySelector('h3')
  const formBtn = document.querySelector('#form > button')
  const tbody = document.querySelector('tbody')
  const btnsInitial = [...document.querySelectorAll('td > button')]
  let editObjectID = null


  const getInputFields = () => {
      return Array.from(document.querySelectorAll('input[type="text"]'))
  }

  const createElementWithTextContent = (tag, textContent) => {
      const e = document.createElement(tag)
      e.textContent = textContent
      return e
  }

  const updateBookDB = async (id, name, author) => {
      const text = {
          author: author.value,
          title: name.value
      }
      try {
          await fetch(`${dbBooks}/${id}`, {
              method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(text)
          })
      } catch (error) {

      }
  }

  const changeFormTitleAndButton = (h3Text, btnText) => {
      h3.textContent = h3Text
      formBtn.textContent = btnText
  }

  const fromEditChange = (name, author) => {
      const [nameFrom, authorForm] = getInputFields()
      nameFrom.value = name
      authorForm.value = author
      changeFormTitleAndButton('Edit FORM', 'Save')


  }

  const editBtnFunc = async (e) => {
      const trContainer = e.target.parentElement.parentElement
      const [name, autor] = Array.from(trContainer.querySelectorAll('td')).slice(0, 2)
      fromEditChange(name.textContent, autor.textContent)
      editObjectID = trContainer.id

  }

  const deleteBtnFunc = async (e) => {
      const trContainer = e.target.parentElement.parentElement
      tbody.removeChild(trContainer)
      await deleteBookEntry(trContainer.id)

  }

  const deleteBookEntry = async (id) => {
      try {
          await fetch(`${dbBooks}/${id}`, {
              method: 'DELETE'
          })
      } catch (error) {

      }
  }

  const createBookInformation = async (data) => {
      for (const key in data) {
          const tr = document.createElement('tr')
          tr.setAttribute('id', key)
          tr.appendChild(createElementWithTextContent('td', `${data[key].title}`))
          tr.appendChild(createElementWithTextContent('td', `${data[key].author}`))
          const td = document.createElement('td')
          const editBtn = createElementWithTextContent('button', 'Edit')
          const deleteBtn = createElementWithTextContent('button', 'Delete')
          editBtn.addEventListener('click', await editBtnFunc)
          deleteBtn.addEventListener('click', await deleteBtnFunc)

          td.appendChild(editBtn)
          td.appendChild(deleteBtn)
          tr.appendChild(td)
          tbody.appendChild(tr)
      }

  }

  const loadBooksFromDb = async () => {
      tbody.innerHTML = ''
      try {
          const data = await fetch(dbBooks)
          await createBookInformation(await data.json())
      } catch (error) {
      }
  }

  const createBookForDb = (inputFields) => {
      return {
          author: inputFields[1].value, title: inputFields[0].value
      }
  }

  const checkForCorrectInput = (inputFields) => {
      for (const item of inputFields) {
          if (!item.value.trim()) {
              return false
          }
      }
      return true
  }

  const clearInputFields = (inputFields) => {
      inputFields.forEach(x => x.value = '')
  }

  const saveBookToDB = async (book) => {
      try {
          await fetch(dbBooks, {
              method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(book)
          })
      } catch (error) {

      }

  }

  const formBtnFunctionality = async () => {
      const input = getInputFields()

      if (!checkForCorrectInput(input)) {
          return
      }
      if (formBtn.textContent === 'Submit') {
          await saveBookToDB(createBookForDb(input))

      } else if (formBtn.textContent === 'Save') {
          changeFormTitleAndButton('FORM', 'Submit')
          await updateBookDB(editObjectID, ...getInputFields())

      }
      clearInputFields(input)
      await loadBooksFromDb()
  }


  loadBooksBtn.addEventListener('click', await loadBooksFromDb)

  formBtn.addEventListener('click', await formBtnFunctionality)

  btnsInitial.forEach(b => (b.addEventListener('click', async () => {
      if (b.textContent === 'Edit') {
          const elements = b.parentElement.parentElement
          const [bookName, bookAuthor] = [elements.children[0], elements.children[1]]

          const [name, author] = getInputFields()
          name.value = bookName.textContent
          author.value = bookAuthor.textContent

          await saveBookToDB(createBookForDb(getInputFields()))

          changeFormTitleAndButton('Edit FORM', 'Save')

      } else if (b.textContent === 'Delete') {
          b.parentElement.parentElement.remove()
      }
  })))

  await loadBooksFromDb()

}

attachEvents();