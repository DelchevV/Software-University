function solve() {
    const departBtn=document.getElementById('depart')
    const arriveBtn=document.getElementById('arrive')
    const span= document.querySelector('div > span')
    let url = 'http://localhost:3030/jsonstore/bus/schedule/'
    let busStop= 'depot'
    let stopName=null;

    function depart() {
        departBtn.disabled=true
        arriveBtn.disabled=false
        fetch(url+busStop)
        .then((resolve)=>{
            return resolve.json()
        })
        .then((data)=>{
            console.log(data)
            let {name, next}= data
            busStop=next
            stopName=name
            span.textContent=`Next stop ${name}`
        })
        .catch(()=>{
            span.textContent="Error"
            departBtn.disabled=true
        arriveBtn.disabled=true
        })
    }

    async function arrive() {
        arriveBtn.disabled=true
        departBtn.disabled=false
        span.textContent=`Arriving at ${stopName}`
        
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();