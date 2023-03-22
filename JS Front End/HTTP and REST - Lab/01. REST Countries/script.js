function solve() {
    const btn = document.getElementsByTagName("button")[0]
    btn.addEventListener('click', findHandler)

    function findHandler() {
        let country = document.getElementById('input')
        let info = document.getElementById('info')

        while (info.firstChild) {
            info.removeChild(info.firstChild);
          }
          
        let url = 'https://restcountries.com/v2/name/' + country.value
        console.log(url)
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                arrangeData(data)
                console.log(data);
            })
            .catch(function () {
                console.log("Bad things just happened")
            })

        function arrangeData(data) {
            let output= document.getElementById('info')
            let name = "Name: " + data[0].name;
            let capital = "Capital: " + data[0].capital;
            let population = "Population: " + data[0].population;
            let region = "Region: " + data[0].region;
            let flag = data[0].flag
            
            let information= [name, capital, population, region]
            for (item of information){
                console.log(item)
                let li = document.createElement('li')
                li.textContent=item
                output.appendChild(li)
            }
            let li = document.createElement('li')
            let img = document.createElement('img')
            img.src=flag
            li.appendChild(img)
            info.appendChild(li)
        }

        country.value = ""
    }
}