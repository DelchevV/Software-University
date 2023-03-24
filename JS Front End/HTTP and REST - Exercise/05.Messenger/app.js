function attachEvents() {
    const refrestBtn= document.getElementById('refresh');
    const submitBtn=document.getElementById('submit');
    const textArea=document.getElementById('messages')
    const authorInput= document.querySelector('input[name="author"]')
    const messageInput= document.querySelector('input[name="content"]')
    
    const url= "http://localhost:3030/jsonstore/messenger/";

    refrestBtn.addEventListener('click', refreshHandler)
    submitBtn.addEventListener('click', submitHandler)


    function refreshHandler(){
        textArea.value=""
        fetch(url)
        .then((resolve)=>{
            return resolve.json()
        })
        .then((data)=>{
            let output=[]
            let info= Object.values(data)
            for (line in info){
                let author = info[line].author
                let message= info[line].content
                output.push(`${author}: ${message}`)
            }
            textArea.value=output.join('\n')
        })
    }

    function submitHandler(){
        let author=authorInput.value 
        let content= messageInput.value
        
        let httpHeader={
            method:"POST",
            body: JSON.stringify({author, content})
        }
        fetch(url, httpHeader)
        .then(()=>{
            authorInput.value =''
            messageInput.value=''

        })
        .catch((err)=>{
            console.error(err)
        })
    }
}

attachEvents();