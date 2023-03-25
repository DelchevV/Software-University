// function attachEvents() {
//     const loadBtn = document.getElementById('btnLoadPosts')
//     const viewBtn=document.getElementById('btnViewPost')
//     const posts = document.getElementById("posts")
//     const postDetails= document.getElementById('post-title')
//     const postCommets= document.getElementById('post-comments')
//     const postbody= document.getElementById('post-body')
//     const URL_POST= 'http://localhost:3030/jsonstore/blog/posts'
//     const URL_COMMENTS= 'http://localhost:3030/jsonstore/blog/comments'

//     loadBtn.addEventListener('click', loadHandler)
//     viewBtn.addEventListener('click', viewHandler)



//     function loadHandler(){
//         posts.innerHTML=""
//         fetch(URL_POST)
//         .then((text)=>{
//             return text.json()
//         })
//         .then((data)=>{
//             for (line in data){
//                 let option= document.createElement('option')
//                 option.value=line
//                 option.textContent=data[line].title
//                 posts.appendChild(option)
//             }
//         })
//     }

//     function viewHandler(){
//         let selectedOption = posts.options[posts.selectedIndex];
        
//          fetch(URL_COMMENTS)
//          .then((info)=>{
//             return info.json()
//          })
//          .then((data)=>{
//             postCommets.innerHTML=''
//             for (line in data){
                
//                 if (selectedOption.value===data[line].postId){
//                     // postDetails.textContent=selectedOption.textContent
//                     fetch(URL_POST)
//                     .then((received)=>{
//                         return received.json()
//                     })
//                     .then((jsonStr)=>{
//                         for (l in jsonStr){
//                             if (l === selectedOption.value){
//                                 postDetails.textContent=jsonStr[l].title
//                                 postbody.textContent=jsonStr[l].body
//                             }
//                         }
//                     })
//                     postbody.textContent=selectedOption
//                     let li = document.createElement('li')
//                     li.textContent=data[line].text
//                     li.id=data[line].id
//                     postCommets.appendChild(li)
//                 }
//             }
//          })
//     }
// }

// attachEvents();


function attachEvents() {
    const [btnLoadPosts, btnViewPost] = Array.from(document.querySelectorAll('button'))
    const posts = document.querySelector('#posts')
    const postTitle = document.querySelector('#post-title')
    const postBody = document.querySelector('#post-body')
    
    let postInfo = {}
    const postsApiUrl = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsApiUrl = 'http://localhost:3030/jsonstore/blog/comments'

    function createElementWithValueAndTextContent(tag, value, textContent) {
        const e = document.createElement(tag)
        e.value = value
        e.textContent = textContent
        return e
    }
    
    function findPost(selected) {
        for (const key in postInfo) {
            if (selected === postInfo[key].id) {
                return postInfo[key]
            }
        }
    }
    
    
    btnLoadPosts.addEventListener('click', () => {
        fetch(postsApiUrl).then(x => x.json()).then(x => {
            postInfo = x
            for (const key in x) {
                posts.appendChild(createElementWithValueAndTextContent('option', x[key].id, x[key].title))
            }
        }).catch()
    })

    btnViewPost.addEventListener('click', () => {
        fetch(commentsApiUrl).then(x => x.json()).then(x => {
            let post = findPost(posts.value)
            postTitle.textContent = post.title
            postBody.textContent = post.body
            const boby = document.querySelector('body')
            const ul = document.querySelector('#post-comments')
            
            boby.removeChild(ul)
            
            const newUl = document.createElement('ul')
            newUl.setAttribute('id', 'post-comments')
            boby.appendChild(newUl)
            const postComments = document.querySelector('#post-comments')
            
            for (const key in x) {
                if (x[key].postId === posts.value) {
                    const l = document.createElement('li')
                    l.textContent = x[key].text
                    postComments.appendChild(l)
                }
            }
        }).catch()
    })

}

attachEvents();