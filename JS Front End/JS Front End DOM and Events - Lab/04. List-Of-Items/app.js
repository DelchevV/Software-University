function addItem() {
    const input=document.getElementById('newItemText').value;
    const items=document.getElementById('items');
    let li=document.createElement('li');
    li.textContent=input;
    items.appendChild(li);
    
    document.getElementById('newItemText').value='';
}