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