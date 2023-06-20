window.addEventListener('load', solve);

function solve() {
    let inputs = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
       
    }

    let otherHtmlElements= {
        addBtn: document.getElementById('add-btn'),
        allHitsContainer: document.querySelector('.all-hits-container'),
        savedHits: document.querySelector('.saved-container'),
        likes: document.querySelector('.likes > p')
    }
    

    otherHtmlElements.addBtn.addEventListener('click', addHandler)

    function addHandler(e){
        e.preventDefault()

        for (key in inputs){
            if (inputs[key].value===""){
                return
            }
        }
        
        let div=createElement('div', null, otherHtmlElements.allHitsContainer,null, ["hits-info"])

        createElement('img',null,div,null, null, {'src': "./static/img/img.png"})
        createElement('h2',`Genre: ${inputs.genre.value}`,div)
        createElement('h2',`Name: ${inputs.name.value}`, div)
        createElement('h2',`Author: ${inputs.author.value}`, div)
        createElement('h3',`Date: ${inputs.date.value}`, div)
        let saveBtn= createElement('button', "Save song", div,null, ['save-btn'] )
        let likeBtn= createElement('button', "Like song", div,null, ['like-btn'] )
        let deleteBtn= createElement('button', "Delete", div,null, ['delete-btn'] )
        
        likeBtn.addEventListener('click' ,likeHandler)
        saveBtn.addEventListener('click' , saveHandler)
        deleteBtn.addEventListener('click', deleteHandler)
        
        for (key in inputs){
            inputs[key].value=''
        }
        
    }

    function deleteHandler(){
        let div = this.parentNode
        div.remove()
    }
    
    function likeHandler(){
        let text=otherHtmlElements.likes.textContent
        
        let numberStr= text.split(": ")[1]
        let number= Number(numberStr)
        number+=1
        
        otherHtmlElements.likes.textContent=`Total Likes: ${number}`
        this.disabled=true

    }

    function saveHandler(){
        const container= document.querySelector('.hits-info')
        let newContainer= container
        container.remove()
        const saveBtn= newContainer.querySelector('.save-btn')
        const likeBtn= newContainer.querySelector('.like-btn')
        newContainer.removeChild(saveBtn)
        newContainer.removeChild(likeBtn)
        otherHtmlElements.savedHits.appendChild(newContainer)


    }






    function createElement(type, content, parentNode, id, classes, attributes){
        const htmlElement = document.createElement(type)
       
        if(content && type !== 'input'){
          htmlElement.textContent = content;
        }
       
        if(content && type === 'input'){
          htmlElement.value = content;
        }
       
        if(id){
          htmlElement.id = id;
        }
       
        if (classes){
          htmlElement.classList.add(...classes);
        }
       
        if (parentNode){
          parentNode.appendChild(htmlElement);
          }
       
        //{ src: 'link to img', href: 'link to site' }
        if (attributes){
          for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
          }
        } 
        return htmlElement
      }
}