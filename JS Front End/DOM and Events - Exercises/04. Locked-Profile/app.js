function lockedProfile() {
    const profiles= document.querySelectorAll(".profile");
    for (p of profiles){
        const btn= p.getElementsByTagName("button")[0];
        console.log(btn)
        btn.addEventListener('click', showHide)
    }

    function showHide(event){
       const button = event.target;
       const profile= button.parentElement
       const showMore= profile.querySelector("div")
       const lockStatus=profile.querySelector('input[value="unlock"]')
       
       if (lockStatus.checked){

        if (button.textContent==="Show more"){
            showMore.style.display="inline-block";
            button.textContent = 'Hide it';

        }else if (button.textContent==="Hide it"){
            console.log('heyyy')
            showMore.style.display="none";
            button.textContent="Show more";
        }    
       }
    }
}