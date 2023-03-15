function deleteByEmail() {
    const tdElements=Array.from(document.querySelectorAll('tbody tr td:nth-child(even)'));
    const email=document.querySelector('input[name="email"]');
    const result=document.getElementById("result");
    let emailValue=email.value;
    let isFound=false;
    
    for (td of tdElements){
        if (td.textContent===emailValue){
            td.parentElement.remove();
            isFound=true;
        }
    }
    if (isFound===true){
        result.textContent="Deleted."
    }
    else{
        result.textContent="Not found."
    }
    document.querySelector('input[name="email"]').value="";
    
}