function addItem() {
    const input=document.getElementById('newItemText').value;
    const items=document.getElementById('items');
    let li=document.createElement('li');
    li.textContent=input;
    items.appendChild(li);
    
    let linkElement =document.createElement("a");
    linkElement.textContent="[Delete]";
    linkElement.href="#";
    li.appendChild(linkElement);

    linkElement.addEventListener('click', clickMe);



    document.getElementById('newItemText').value='';

    function clickMe(e){
        let elementTzoDelete= e.target.parentElement;
        elementTzoDelete.remove();

    }
}