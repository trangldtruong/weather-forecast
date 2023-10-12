var buttonEl = document.querySelector('#search-button')
var apiKey = "fdc35111e213fb02c228dce2699bda6b"
var userInput = document.querySelector('#user-input')
var city = userInput.textContent
//var lat = coord.lat
//var lon = coord.lon
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
            //coord = data[0]
            currentWeather(data[0].lat, data[0].lon, city);
            forecastWeather(data[0].lat, data[0].lon);

        })
    }
})};

function currentWeather(lat, lon, city){
//function to find current weather 
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`) 
   .then(function (response) {
    if (response.ok) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data);
            let h2 = $("<h2>");
            h2.text(city);
            let temp = $("<p>");
            temp.text("Temp: "+data.main.temp);

            let humidity = $("<p>");
            humidity.text("Humidity: "+data.main.humidity);

            let wind = $("<p>");
            wind.text("Wind Speed: "+data.wind.speed);

            $("#current-weather").append(h2, temp, humidity, wind)
        })
    }
})
}

//function to find forecast
function forecastWeather(lat, lon){
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
.then(function(res){
    return res.json();
})
.then(function(forecastData){
    //console.log("Forecast Data: "+JSON.stringify(forecastData));
    for(var i=0; i<forecastData.list.length;i++){
        if(forecastData.list[i].dt_txt.split(" ")[1] === "03:00:00"){
            console.log("test");
            //create a div and assign class "col-md-2" and then append it to the #five-day-forecast div
            // create <p> for temp, humidity and wind
            //append them to col-md-2 div
        }
    }
})
//function to display current weather 
var currentTemperature = document.querySelector('#current-temperature')
//currentTemperature = main.temp
}
//function to display forecast 
var renderCoord = buttonEl.addEventListener('click', function(){
    var city = document.getElementById("user-input").value;
    getCoord(city);
})