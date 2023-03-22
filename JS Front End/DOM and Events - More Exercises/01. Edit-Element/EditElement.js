function editElement(element, match,replacer ) {
    let str=element.textContent;

    while(str.includes(match))
    str=str.replace(match, replacer)
    
    element.textContent=str;

}