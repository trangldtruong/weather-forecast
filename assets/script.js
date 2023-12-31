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
            currentWeather(data[0].lat, data[0].lon, city);
            forecastWeather(data[0].lat, data[0].lon);

        })
    }
})};

function currentWeather(lat, lon, city){
//function to find and display current weather 
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
            wind.text("Wind: "+data.wind.speed);

            $("#current-weather").append(h2, temp, humidity, wind)
        })
    }
})
}

//function to find and display 5-day forecast
function forecastWeather(lat, lon){
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
.then(function(res){
    return res.json();
})
.then(function(forecastData){
    for(var i=0; i<forecastData.list.length; i++){
        if(forecastData.list[i].dt_txt.split(" ")[1] === "03:00:00"){
            console.log(forecastData);
            let forecast = $("<div>")
           
           let date = $("<p>")
           date.text("Date and Time: " +forecastData.list[i].dt_txt )
           let temp = $("<p>");
            temp.text("Temp: "+forecastData.list[i].main.temp);

            let humidity = $("<p>");
            humidity.text("Humidity: "+forecastData.list[i].main.humidity);

            let wind = $("<p>");
            wind.text("Wind: "+forecastData.list[i].wind.speed);

            forecast.append(date, temp, humidity, wind)
            $("#five-day-forecast").append(forecast)
        }
    }
})
}

//function to store data
function saveHistory(city) {
    localStorage.setItem("history", city)
}

//even t listener
var renderCoord = buttonEl.addEventListener('click', function(){
    var city = document.getElementById("user-input").value;
    getCoord(city);
    saveHistory(city);
});