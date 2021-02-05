// - Your API key is 0f9dd32babe408905fb98d5398ec6131
// - Within the next couple of hours, it will be activated and ready to use
// - Please, always use your API key in each API call

// Endpoint:
// - Please, use the endpoint api.openweathermap.org for your API calls
// - Example of API call:
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0f9dd32babe408905fb98d5398ec6131

// Useful links:
// - API documentation https://openweathermap.org/api

$(document).ready(function () {
    // var requestUrl, searchBtn, cityName
    var searchBtn = document.getElementById('search-button');
    var userInput = document.getElementById('user-input');


    // function init gets api data
    function getApi(searchTerm) {

        // var searchTerm = userInput.value;
        if (searchTerm === 'undefined') {
          searchTerm = userInput.value;
        }

        userInput.value = '';
        storeCities(searchTerm);
        // for each click, create list item for each city, append to the city list
        var currentDay = document.getElementById('current-day');
        var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm + '&units=imperial&appid=0f9dd32babe408905fb98d5398ec6131';


        // fetch the url with the 5 day forecast
        fetch(requestUrl)
            .then(function (response) {

                // return a json object
                return response.json();
            })
            .then(function (data) {

                console.log(data);
                // and append the city name, date, temp, humidity, widnspeed, uvindex to the dashboard container

                var cityName = document.createElement('h2');
                cityName.textContent = data.city.name;
                currentDay.appendChild(cityName);
                var date = document.createElement('h3');
                date.textContent = data.list[0].dt_txt;
                cityName.append(date);

                // var icon = document.createElement('symbol');
                // icon = data.list[0].weather.icon.value;
                // currentDay.appendChild(icon);

                var temperature = document.createElement('p');
                temperature.textContent = ('Temperature: ' + data.list[0].main.temp + '\u00B0F');
                currentDay.appendChild(temperature);

                var humidity = document.createElement('p');
                humidity.textContent = ('Humidity: ' + data.list[0].main.humidity + '%');
                currentDay.appendChild(humidity);


                var windSpeed = document.createElement('p');
                windSpeed.textContent = ('Wind Speed: ' + data.list[0].wind.speed + ' MPH');
                currentDay.appendChild(windSpeed);

                console.log('date: ', data.list[0].dt_txt);


                // 5 days, 1 day is 24 hours, 3 hour increments, 8 increments is 1 day, 40 increments is 5 days, if it can be divided by 8, its a day i want to print to the page
                var dayForecast = document.getElementById('day-forecast')

                for (let i = 8; i < data.list.length; i+=8) {
                    var day = document.createElement('div');
                    day.classList.add('forecast');
                    dayForecast.appendChild(day);

                    var forecastDate = document.createElement('p');
                    var forecastTemp = document.createElement('p');
                    var forecastHumidity = document.createElement('p');

                    forecastDate.textContent = data.list[i].dt_txt;
                    forecastHumidity.textContent = ('Humidity: ' + data.list[i].main.humidity + '%');
                    forecastTemp.textContent = ('Temperature: ' + data.list[i].main.temp + '\u00B0F');

                    day.appendChild(forecastDate);
                    day.appendChild(forecastTemp);
                    day.appendChild(forecastHumidity);
                }
                renderHistory()
            })
    }

    function storeCities(searchTerm) {
        var cities = getCities();
        cities.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(cities));
    }

    function getCities() {
        var cities = localStorage.getItem('searchHistory');
        if (cities !== null) {
            cities = JSON.parse(cities);
        } else {
            cities = [];
        }
        return cities;
    }

    function renderHistory() {

        var cities = getCities();
        var userList = document.querySelector('ul');
        userList.innerHTML = null;
        for (let i = 0; i < cities.length; i++) {
            var cityName = document.createElement('li');
            cityName.textContent = cities[i];
            cityName.classList.add('list-item');
            cityName.addEventListener('click', getButtonValue);
            userList.appendChild(cityName);
        }

    }

    function getButtonValue() {
        var searchTerm = this.textContent;
        console.log(searchTerm);
        getApi(searchTerm);
    }

    renderHistory();
    // api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt=6&appid=0f9dd32babe408905fb98d5398ec6131

    // add event listener search button 'click' getApi(requestUrl) function
    searchBtn.addEventListener('click', getApi);
    // local storage, dont need to push cities to an array
    // refresh saves the last city that she looked up, will be displayed on page
});
