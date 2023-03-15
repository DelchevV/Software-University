function focused() {
    const inputs=Array.from(document.querySelectorAll("input[type='text']"));
    console.log(inputs)
    for (el of inputs){
        
        el.addEventListener("focus", changeBg)
        el.addEventListener("blur", removeBg)
    }

    function changeBg(e){
        const div = e.target.parentElement;
        div.classList.add('focused');
    }

    function removeBg (e){
        const div = e.target.parentElement;
        div.classList.remove('focused');
    }
}