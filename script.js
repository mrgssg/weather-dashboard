// set the variables needed
var city = document.getElementById("enter-city");
var searchButton = document.getElementById("search-button");
var name = document.getElementById("city-name");
var currentTemp = document.getElementById("temperature");
var currentHumidity = document.getElementById("humidity");
var currentWind = document.getElementById("wind-speed");
var history = document.getAnimations("history");
var fiveDay = document.getElementById("fiveday-header");
var todaysWeather = document.getElementById("todays-weather");
var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do YYYY'))


// event listener for city search button and area to populate current weather

searchButton.addEventlistener('click', getWeather); 

function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?=e8254a1270fb2c8b6d2371a09bd4627a")
    .then(response => response.json()) 
    .then(data => {})
        return response.json()
    }

        city-name.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ")";
        currentTemp.innerHTML = "Temperature: " + (response.data.main.temp) + " &#176F";
        currentHumidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
        currentWind.innerHTML = "Wind Speed: " + response.data.main.hunidity + " MPH";


    // 5 day forecast
   
    fetch("https://api.openweathermap.org/data/2.5/weather?=e8254a1270fb2c8b6d2371a09bd4627a");
    {
            // fiveDay.classlist;

            var forecastEls = document.querySelectorAll(".forecast");
            for (i = 0; i < forecastEls.length; i++) {
                forecastEl[i].innerHTML = temperatur + wind + humidity;
                var forecastDate = new Date(response.data.list);
                var forecastDay = forecastDate.getDate(); + 1;
                forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
                forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
                forecastEls[i].append(forecastDateEl);
            }
        };


// city search history 
search.addEventlistener("click", function () {
    var city = city.val;
    getWeather();
    searchHistory.push();
    localStorage.setItem("search", json.stringify(searchHistory));
    return SearchHistory();
})

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





