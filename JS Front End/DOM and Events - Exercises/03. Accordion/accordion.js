function toggle() {
    const btn=document.getElementsByClassName('button')[0];
    const extra= document.getElementById('extra');
    if (btn.textContent==="More"){
        extra.style.display="block";
        btn.textContent="Less"
    }
    else{
        extra.style.display="none";
        btn.textContent="More";
    }
    console.log(btn)
}