var buttonEl = document.querySelector('#search-button')
var apiKey = "fdc35111e213fb02c228dce2699bda6b"
var userInput = document.querySelector('#user-input')
var currentTemp
buttonEl.addEventListener('click', function(){
    console.log(userInput.value)
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + userInput.value + "&appid=fdc35111e213fb02c228dce2699bda6b")
.then(function (response) {
    if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
console.log(data.city.name);

        })

    }

})
// var apiUrl = 


})