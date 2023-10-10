var buttonEl = document.querySelector('#search-button')
var apiKey = "fdc35111e213fb02c228dce2699bda6b"
var userInput = document.querySelector('#user-input')
var city = userInput.textContent
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

var renderCoord = buttonEl.addEventListener('click', getCoord)
//function to find current weather 

//function to find forecast

//function to display current weather 

//function to display forecast 
