var APIKey = '9ac1e281d61979486558000ed189b157'
const containerEl = document.getElementById('mainContainer')
const formContainerEl = document.getElementById('formContainer')
const weatherdescEl = document.getElementById('weatherDesc')
const iconEl = document.getElementById('icon')
const tempEl = document.getElementById('temp')
const cityEl = document.getElementById('currentCity')
const submitButton = document.getElementById('getApi')
const resetButton = document.getElementById('reset')
submitButton.addEventListener('click', apiCall)
containerEl.classList.add('invisible')
formContainerEl.classList.add('visible')
resetButton.addEventListener('click', reset)

function apiCall(){
var city = document.getElementById('cityGet').value
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    var currentCity = data.name
    cityEl.innerHTML = currentCity
    var weatherDesc = data.weather[0].description
    weatherdescEl.innerText = weatherDesc
    var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    iconEl.src = icon
    var temp = data.main.temp + 'º C'
    tempEl.innerHTML = temp

})
containerEl.classList.remove('invisible')
 containerEl.classList.add('visible')
formContainerEl.classList.add('invisible')
 formContainerEl.classList.remove('visible')
}
function reset(){
    containerEl.classList.add('invisible')
    containerEl.classList.remove('visible')
formContainerEl.classList.remove('invisible')
formContainerEl.classList.add('visible')

}