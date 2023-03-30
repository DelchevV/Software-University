window.addEventListener("load", solve);


function solve() {
  let copyOfInputs = null; 
  
  let otherElements = {
    publishBtn: document.getElementById('form-btn'),
    previewList: document.getElementById('preview-list'),
    main: document.getElementById('main')
  }

  let inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story')
  }
  otherElements.publishBtn.addEventListener('click', publishHandler)


  function publishHandler() {
    

    
    for (line in inputs){
      if (inputs[line].value==""){
        return
      }
    }
    copyOfInputs = {
      firstName: inputs.firstName.value,
      lastName: inputs.lastName.value,
      age: inputs.age.value,
      title: inputs.title.value,
      genre: inputs.genre.value,
      story: inputs.story.value
    }


    let li = createElement('li', null, otherElements.previewList, null, ["story-info"])
    let article= createElement('article', null, li)
    h4 = createElement('h4', `Name: ${inputs.firstName.value} ${inputs.lastName.value}`, article)
    age= createElement('p',`Age: ${inputs.age.value}`, article)
    title= createElement("p",`Title: ${inputs.title.value}`, article)
    genre= createElement("p",`Genre: ${inputs.genre.value}`, article)
    story= createElement("p",inputs.story.value, article)
    let saveBtn = createElement('button', "Save Story", li, null, ['save-btn'])
    let editBtn = createElement('button', "Edit Story", li, null, ['edit-btn'])
    let deleteBtn = createElement('button', "Delete Story", li, null, ['delete-btn'])

    otherElements.publishBtn.disabled= true

    saveBtn.addEventListener('click', saveHandler)
    editBtn.addEventListener('click', editHandler)
    deleteBtn.addEventListener('click', deleteHandler)

    clearInputs(inputs)
  }

  function clearInputs(obj){
    for (line in obj){
      obj[line].value=""
    }
  }

  function saveHandler(){
    otherElements.main.innerHTML=""
    h1= createElement("h1", "Your scary story is saved!", otherElements.main)
  }

  function deleteHandler(){
    let li = otherElements.previewList.querySelector('.story-info');
    li.innerHTML="";
    otherElements.publishBtn.disabled=false
  }

  function editHandler(){
    for (key in inputs){
      inputs[key].value= copyOfInputs[key];
    }
    deleteHandler()
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
