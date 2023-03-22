function validate() {
    const bar= document.getElementById("email");
    bar.addEventListener("change", check)

    function check(){
        const re=/[a-z]+@[a-z]+\.[a-z]+/;
        text= bar.value;
        if (text.match(re)){
            console.log(text.match(re)[0])
            bar.classList.remove("error")
        }else{
            bar.classList.add("error")
        }
        
    }

}