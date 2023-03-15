function sumTable() {
    const tdWithPirces=Array.from(document.querySelectorAll("tr td:nth-child(even)"));
    const result=document.getElementById('sum');

    let sum=0;

    for (el of tdWithPirces){
        sum += Number(el.textContent);
    }
    result.textContent=sum;
}