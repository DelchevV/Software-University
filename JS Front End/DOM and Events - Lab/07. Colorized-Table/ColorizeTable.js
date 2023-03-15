function colorize() {
    const rows=Array.from(document.querySelectorAll('table tr:nth-child(even)'));

    for (el of rows){
        el.style.backgroundColor='Teal'
    }
}