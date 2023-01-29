// set the variables needed
var city = document.getElementById("enter-city");
var searchButton = document.getElementById("searchBtn");
var nameEl = document.getElementById("city-name");
var currentTemp = document.getElementById("temperature");
var currentHumidity = document.getElementById("humidity");
var currentWind = document.getElementById("wind-speed");
var history = document.getAnimations("history");
var todaysWeather = document.getElementById("todays-weather");
var today = moment();
var weatherIcon = document.getElementById("weather-icon")


// event listener for city search button and area to populate current weather

searchButton.addEventListener('click', getWeather); 
function showCurrentWeather (weather) {
    nameEl.textContent=weather.city.name
    // weatherIcon.textContent=weather.weather[0].icon
    currentTemp.textContent=`Temp: ${weather.list[0].main.temp} °F`
    currentHumidity.textContent=`Humidity: ${weather.list[0].main.humidity} %`
    currentWind.textContent=`Wind: ${weather.list[0].wind.speed} mph`
    today.textContent=$("#currentDay").text(today.format('MMMM Do YYYY'))
    localStorage.setItem(nameEl, "");
}

 // 5 day forecast
function show5Day (fiveDay){
    for (let i = 0; i < fiveDay.list.length; i=i+8) {
      
   console.log(fiveDay.list[i]) 
    }
}

function getWeather() {

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=e8254a1270fb2c8b6d2371a09bd4627a&units=imperial")
    .then(response => response.json()) 
    .then(data => {
        showCurrentWeather(data)
        show5Day(data)
    })}


function searchHistory() {
    historyEl.innerHTML = "";
    for (let i = 0; i < searchHistory.length; i++) {
        const historyItem = document.createElement("input");
        historyItem.setAttribute("type", "text");
        historyItem.setAttribute("readonly", true);
        historyItem.setAttribute("class", "form-control d-block bg-white");
        historyItem.setAttribute("value", searchHistory[i]);
        historyItem.addEventListener("click", function () {
            getWeather(historyItem.value);
        })
        historyEl.append(history.Item);
    }
}





