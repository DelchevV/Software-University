// TODO
function attachEvents() {
//   const addBtn= document.getElementById('add-button');
//   const loadBtn= document.getElementById('load-button');
//   const list= document.getElementById('todo-list');
//   const titleInput= document.getElementById('title');
//   const BASE_URL='http://localhost:3030/jsonstore/tasks/'

  
//   loadBtn.addEventListener('click' , loadHandler)
//   addBtn.addEventListener('click', addHandler)

//   function addHandler(event){
//     event.preventDefault();

//     let name = titleInput.value;
//     let httpHeaders={
//         method:"POST",
//         body:JSON.stringify({name})
//     }

//     fetch(BASE_URL, httpHeaders)
//     .then(()=>{
//         loadIt()
//     })
//     .catch((err)=>{
//         console.error(err)
//     })
    

//   }

//   function loadHandler(event){
//     event.preventDefault();
//     loadIt()
    
    
//   }
//   function loadIt(){
//     list.innerHTML=""
//     fetch(BASE_URL)
//     .then((resolve)=>{
//         return resolve.json();
//     })
//     .then((data)=>{
//         for (record in data){
//             const li = document.createElement('li');
//             const span = document.createElement('span');
//             const removeBtn= document.createElement('button');
//             const editBtn= document.createElement('button');

//             removeBtn.id=data[record]._id
//             editBtn.id=data[record]._id
            
//             span.textContent=data[record].name;
//             removeBtn.textContent='Remove';
//             editBtn.textContent='Edit';

//             removeBtn.addEventListener('click', removeHandler)
//             editBtn.addEventListener('click', editHandler)

//             li.appendChild(span)
//             li.appendChild(removeBtn)
//             li.appendChild(editBtn)
//             list.appendChild(li)

//         }
//     })
// }

//   function editHandler(event){
//     let el = event.currentTarget
//     let li = el.parentNode
//     let span = li.getElementsByTagName('span')[0]
//     let input = document.createElement('input')
//     let editBtn= li.getElementsByTagName('button')[1]
//     editBtn.remove()
//     let submitBtn=document.createElement('button')
//     submitBtn.textContent="Submit"
    
//     submitBtn.id=this.id
//     input.value=span.textContent
//     span.remove()
    
//     submitBtn.addEventListener('click', submitHandler)

//     li.prepend(input)
//     li.appendChild(submitBtn)
    
//   }

//   function submitHandler(event){
//     let li = event.currentTarget.parentNode
//     let input = li.getElementsByTagName('input')[0]
    
//     let httpHeaders={
//         method: "PATCH",
//         body:JSON.stringify({
//             name: input.value,
//         })
//     }
//     fetch(`${BASE_URL}${this.id}`, httpHeaders)
//     .then((resolve)=>{
//         loadIt()
//     })
//   }


//   function removeHandler(event){
//     let httpHeaders={
//         method: "DELETE"
//     }
//     fetch(`${BASE_URL}${this.id}`, httpHeaders)
//     .then(()=>{
//         loadIt()
//     })
    
//   }
}

attachEvents();
