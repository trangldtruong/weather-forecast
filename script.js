var buttonEl = document.querySelector('#search-button')
var apiKey = "fdc35111e213fb02c228dce2699bda6b"
var userInput = document.querySelector('#user-input')
var currentTemp
var dayOne = ""
var lat 
var lon 
//fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + userInput.value + "&appid=" + apiKey)
// find city latitude and longitude
function getCordinate (city) {
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
.then(function (response) {
    if (response.ok) {
        //console.log(response);
        response.json().then(function (data) {
            //console.log(data[0].lat);
            //console.log(data[0].lon);
            var cord = {lat: data[0].lat, lon: data[0].lon}
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cord.lat}&lon=${cord.lon}&appid=${apiKey}`)
           
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data);
            //insert function to display current weather
        
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cord.lat}&lon=${cord.lon}&appid=${apiKey}`)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data)
                    })
                }
            })         
            
               
                })};
            
            })


})}})
}
//function display current weather
//function display forecast

buttonEl.addEventListener('click', function(){
    console.log(getCordinate(userInput.value))
    //.then(function (data) {
        //console.log(data)
    //})
    console.log(lat,lon)
    //next five days
    
// var apiUrl = 


})