// - Your API key is 0f9dd32babe408905fb98d5398ec6131
// - Within the next couple of hours, it will be activated and ready to use
// - Please, use the endpoint api.openweathermap.org for your API calls
// Useful links:
// - API documentation https://openweathermap.org/api

$(document).ready(function () {
    // var requestUrl, searchBtn, cityName
    var searchBtn = document.getElementById('search-button');
    var userInput = document.getElementById('user-input');


    // function init gets api data
    function getApi(searchTerm) {

        // var searchTerm = userInput.value;
        if (typeof searchTerm !== 'string') {
            searchTerm = userInput.value;
        }

        // after we have the search term, clear search value
        userInput.value = '';

        // save my search in local storage
        storeCities(searchTerm);
        // for each click, create list item for each city, append to the city list
        var currentDay = document.getElementById('current-day');
        currentDay.innerHTML = [];

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

                // var icon = document.createElement('img');
                // icon.innerHTML = data.list[0].weather.icon;
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
                var dayForecast = document.getElementById('day-forecast');
                dayForecast.innerHTML = [];
                for (let i = 8; i < data.list.length; i += 8) {
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

                var lat = data.city.coord.lat;
                console.log(data.city.coord.lat);
                var lon = data.city.coord.lon;
                console.log(data.city.coord.lon);

                // get uvi, create p element, append to current day
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,daily,alerts&appid=0f9dd32babe408905fb98d5398ec6131", requestOptions)
                    .then(response => { return response.json() })
                    .then(result => {
                        console.log(result);
                        console.log(result.current.uvi);
                        console.log(result.lat);
                        console.log(result.lon);

                        var UVI = document.createElement('p');
                        UVI.textContent = ('UV Index: ' + result.current.uvi + '%');
                        currentDay.appendChild(UVI);

                    })
                    .catch(error => { console.log('error', error) });
            })
    }


    // set search terms to local storage
    function storeCities(searchTerm) {
        // the cities in local storage are a string, get them
        var cities = getCities();
        // now that its an array, push searchTerm on, and stringify cities array in local storage
        cities.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(cities));
    }

    // refresh saves the last city that she looked up, will be displayed on page
    function getCities() {
        // get key searchHistory from local storage
        var cities = localStorage.getItem('searchHistory');
        // if cities exist, json parse into array to be displayed
        if (cities !== null) {
            cities = JSON.parse(cities);
        }
        // else cities array is empty
        else {
            cities = [];
        }
        // returns cities array
        return cities;
    }

    function renderHistory() {
        // get cities array
        var cities = getCities();
        // set the userlist inner html to empty
        var userList = document.querySelector('ul');
        userList.innerHTML = null;
        // for each city in the array, create a list item, text content is the text of the array, on click, run a function to add city name to url
        for (let i = 0; i < cities.length; i++) {
            var cityName = document.createElement('li');
            cityName.textContent = cities[i];
            cityName.classList.add('list-item');
            cityName.addEventListener('click', getButtonValue);
            userList.appendChild(cityName);
        }

    }

    function getButtonValue() {
        // searchterm from url is this buttons text
        var searchTerm = this.textContent;
        console.log(typeof searchTerm);
        // get api data with searchterm
        getApi(searchTerm);
    }

    // on load call the citie in local storage
    renderHistory();

    // on click, get the api
    searchBtn.addEventListener('click', getApi);
});
