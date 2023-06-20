window.addEventListener("load", solve);

function solve() {
  const domInputs = {
    firstName: document.getElementById('first-name'),
    lasttName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  }


  const otherDomElements = {
    publishbtn: document.getElementById('form-btn'),
    preview: document.getElementById('preview-list'),
    form: document.getElementsByTagName('form')[0],
    main: document.getElementById('main')
  }

  otherDomElements.publishbtn.addEventListener('click', publishHandler)
  let copyOfInputs={}

  function publishHandler() {
    for (line in domInputs){
      if (domInputs[line].value===""){
        return;
      }
    } 
    for (line in domInputs){
      copyOfInputs[line]=domInputs[line].value
      
    } 


    const li = createElement('li', null,otherDomElements.preview, null, ['story-info'])
    const article= createElement('article', null, li)
    createElement('h4', `Name: ${domInputs.firstName.value} ${domInputs.lasttName.value}`, article)
    createElement('p', `Age: ${domInputs.age.value}`, article)
    createElement('p', `Title: ${domInputs.title.value}`, article)
    createElement('p', `Genre: ${domInputs.genre.value}`, article)
    createElement('p', domInputs.story.value, article)
    const saveBtn= createElement('button', "Save Story", li, null, ['save-btn'])
    const editBtn= createElement('button', "Edit Story", li, null, ['edit-btn'])
    const deleteBtn= createElement('button', "Delete Story", li, null, ['delete-btn'])

    editBtn.addEventListener('click', editHandler)
    saveBtn.addEventListener('click', saveHandler)
    deleteBtn.addEventListener('click', deleteHandler)
    
    otherDomElements.form.reset();
    otherDomElements.publishbtn.disabled=true;
    

  }

  function deleteHandler(){
    const li = document.querySelector('ul > li')
    li.remove()
    otherDomElements.publishbtn.disabled=false;
  }

  function saveHandler(){
    otherDomElements.main.innerHTML=""
    createElement('h1', "Your scary story is saved!", otherDomElements.main)
  }

  function editHandler(){
    for (line in domInputs){
      domInputs[line].value=copyOfInputs[line]
    }
    otherDomElements.publishbtn.disabled=false;
    const li = document.querySelector('ul > li')
    li.remove()

  }


  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type)

    if (content && type !== 'input') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    //{ src: 'link to img', href: 'link to site' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    return htmlElement
  }
}
