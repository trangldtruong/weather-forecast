var buttonEl = document.querySelector('#search-button')
var apiKey = "fdc35111e213fb02c228dce2699bda6b"
var userInput = document.querySelector('#user-input')
var city = userInput.textContent
var lat = ""
var lon = ""
var formSubmitHandler = function (event) {
    event.preventDefault();
}
//function to find latitude and longitude 
var getCoord = function (city) {
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
  .then(function (response) {
    if (response.ok) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data);

        })
    }
})};

//function to find current weather 
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`) 
   .then(function (response) {
    if (response.ok) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data)
        })
    }
})

//function to find forecast
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//function to display current weather 
var currentTemperature = document.querySelector('#current-temperature')
//function to display forecast 
var renderCoord = buttonEl.addEventListener('click', getCoord)