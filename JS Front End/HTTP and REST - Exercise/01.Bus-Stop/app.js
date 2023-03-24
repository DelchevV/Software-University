function getInfo() {
    const busId= document.getElementById('stopId')
    const buses= document.getElementById('buses')
    const stopName=document.getElementById('stopName')
    let url='http://localhost:3030/jsonstore/bus/businfo/'+busId.value
   
    buses.innerHTML=''
    stopName.innerHTML=''
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        dataHandler(data)
    })
    .catch((err)=>{
        stopName.textContent="Error"
    })


    function dataHandler(data){
        let name= data.name
        stopName.textContent=name
       
        for (bus in data.buses){
            let busId=bus
            let time= data.buses[bus]
            let li = document.createElement('li')
            li.textContent= `Bus ${busId} arrives in ${time} minutes`
            buses.appendChild(li)
        }
    }
}