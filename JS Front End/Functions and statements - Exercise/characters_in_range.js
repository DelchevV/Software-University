function charRange(el1, el2){
    let result=[];
    if (el1.charCodeAt(0) <= el2.charCodeAt(0)){
        for (let index = el1.charCodeAt(0)+1; index < el2.charCodeAt(0); index++) {
            result.push(String.fromCharCode(index))   
        }
    }
    else{
        for (let index =el2.charCodeAt(0)+1; index < el1.charCodeAt(0); index++) {
            result.push(String.fromCharCode(index))   
        }
    }
    console.log(result.join(" "))
}
charRange("#",":")