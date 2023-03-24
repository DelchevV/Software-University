// const common = require("mocha/lib/interfaces/common")

function attachEvents() {
    const getWeatherBtn = document.getElementById('submit')
    const forecastDiv = document.getElementById('forecast')
    const locationInput = document.getElementById('location')
    const current = document.getElementById('current')
    let correctWheather= false
    let url = 'http://localhost:3030/jsonstore/forecaster/locations'

    getWeatherBtn.addEventListener('click', getWheaterHandler)

    function getWheaterHandler() {
        forecastDiv.style.display = "block"
        fetch(url)
            .then((solve) => {
                return solve.json()
            })
            .then((data) => {

                let location = locationInput.value;
                for (line in data) {
                    if (data[line].name === location) {
                        correctWheather==true
                        currentCondtions(data[line].code)
                        threeDaysConditions(data[line].code)
                    }
                }
            })
            .then(x => correctWheather === false ? '' : errorMsg()).catch()
        
            function errorMsg() {
                const p = document.createElement('p')
                p.textContent = 'Error'
                forecastDiv.style.display = 'block'
                current.appendChild(p)
            }

    }
    function currentCondtions(code) {
        let todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`

        fetch(todayUrl)
            .then((resolve) => {
                return resolve.json()
            })
            .then((data) => {

                let condition = data.forecast.condition
                let low = data.forecast.low
                let high = data.forecast.high
                let loc = data.name
                let symbol = checkSymbol(condition)
                
                let forecasts = document.createElement('div')
                forecasts.classList.add("forecasts")
                let symbolSpan = document.createElement('span')

                
                symbolSpan.textContent=symbol

                symbolSpan.classList.add('symbol', "condition")
                forecasts.appendChild(symbolSpan)
                let locSpan= document.createElement('span')
                let degreeSpan= document.createElement('span')
                let conditionSpan= document.createElement('span')
                let conditionWrapper=document.createElement('span')

                locSpan.classList.add('forecast-data')
                degreeSpan.classList.add('forecast-data')
                conditionSpan.classList.add('forecast-data')
                conditionWrapper.classList.add('condition')
                conditionWrapper.appendChild(locSpan)
                conditionWrapper.appendChild(degreeSpan)
                conditionWrapper.appendChild(conditionSpan)

                locSpan.textContent=loc
                degreeSpan.textContent=`${low}°/${high}°`
                conditionSpan.textContent= condition

                forecasts.appendChild(conditionWrapper)
                current.appendChild(forecasts)




            })

    }
    function checkSymbol(c) {
        switch (c) {
            case "Sunny":
                return "☀"
            case "Partly sunny":
                return "⛅"
            case "Overcast":
                return "☁"
            case "Rain":
                return "☂"
            default:
                return "could find it"
        }
    }

    function threeDaysConditions(code) {
        let threeDayUrl=`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
        fetch(threeDayUrl)
        .then((resolve)=>{
            return resolve.json()
        })
        .then((data)=>{
            for (day of data.forecast){
                let condition = day.condition
                let low = day.low
                let high = day.high
                let symbol = checkSymbol(condition)
                
                let forecasts = document.createElement('div')
                forecasts.classList.add("forecast-info")
                let symbolSpan = document.createElement('span')

                
                symbolSpan.textContent=symbol

                symbolSpan.classList.add('symbol')
                forecasts.appendChild(symbolSpan)
                let locSpan= document.createElement('span')
                let degreeSpan= document.createElement('span')
                let conditionSpan= document.createElement('span')
                let conditionWrapper=document.createElement('span')

                locSpan.classList.add('forecast-data')
                degreeSpan.classList.add('forecast-data')
                conditionSpan.classList.add('forecast-data')
                conditionWrapper.classList.add('upcoming')
                conditionWrapper.appendChild(locSpan)
                conditionWrapper.appendChild(degreeSpan)
                conditionWrapper.appendChild(conditionSpan)

                locSpan.textContent=loc
                degreeSpan.textContent=`${low}°/${high}°`
                conditionSpan.textContent= condition

                forecasts.appendChild(conditionWrapper)
                current.appendChild(forecasts)
            }
        })
    }

}

attachEvents();