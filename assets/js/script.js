// - Your API key is 0f9dd32babe408905fb98d5398ec6131
// - Within the next couple of hours, it will be activated and ready to use
// - Please, use the endpoint api.openweathermap.org for your API calls
// Useful links:
// - API documentation https://openweathermap.org/api

$(document).ready(function () {
    // var requestUrl, searchBtn, cityName
    var searchBtn = document.getElementById('search-button');
    var userInput = document.getElementById('user-input');
    var currentDay = document.getElementById('current-day');

    // function init gets api data
    function getApi(searchTerm) {

        // run a check, if not a string, like if nothing is in local storage, refer to userinput for the searchterm variable
        if (typeof searchTerm !== 'string') {
            searchTerm = userInput.value;
        }

        // after we have the search term, clear search value
        userInput.value = '';
        // save my search in local storage
        storeCities(searchTerm);
        // for each click, create list item for each city, append to the city list
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

                var icon = document.createElement('img');
                icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
                cityName.appendChild(icon);

                var date = document.createElement('h3');
                date.textContent = data.list[0].dt_txt;
                cityName.append(date);

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
                // var dayForecast = document.getElementById('day-forecast');
                // dayForecast.innerHTML = [];
                // for (let i = 0; i < data.list.length; i += 8) {
                //     var day = document.createElement('div');
                //     day.classList.add('forecast');
                //     dayForecast.appendChild(day);

                //     var forecastDate = document.createElement('p');
                //     var forecastTemp = document.createElement('p');
                //     var forecastHumidity = document.createElement('p');

                //     forecastDate.textContent = data.list[i].dt_txt;

                //     forecastHumidity.textContent = ('Humidity: ' + data.list[i].main.humidity + '%');
                //     forecastTemp.textContent = ('Temperature: ' + data.list[i].main.temp + '\u00B0F');

                //     day.appendChild(forecastDate);
                //     day.appendChild(forecastTemp);
                //     day.appendChild(forecastHumidity);
                // }

                renderHistory()

                var lat = data.city.coord.lat;
                console.log(data.city.coord.lat);
                var lon = data.city.coord.lon;
                console.log(data.city.coord.lon);

                getUVIndex(lat, lon)


            })
    }

    // retrieve UVIndex
    function getUVIndex(lat, lon) {

        // get uvi, create p element, append to current day
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=0f9dd32babe408905fb98d5398ec6131", requestOptions)
            .then(response => { return response.json() })
            .then(result => {
                console.log(result);
                console.log(result.current.uvi);
                console.log(result.lat);
                console.log(result.lon);

                var UVI = document.createElement('p');
                var UVIndex = document.createElement('span');

                UVIndex.textContent = result.current.uvi;
                UVI.textContent = ('UV Index: ');

                UVI.appendChild(UVIndex);
                currentDay.appendChild(UVI);

                var a = result.current.uvi;
                console.log(a);

                if (a <= 2) {
                    // a.classList.remove('moderate');
                    // a.classList.remove('severe');
                    UVIndex.classList.add('favorable');
                }
                else if (a > 2 && a < 6) {
                    // a.classList.remove('favorable');
                    // a.classList.remove('severe');
                    UVIndex.classList.add('moderate');
                } else {
                    // a.classList.remove('moderate');
                    // a.classList.remove('favorable');
                    UVIndex.classList.add('severe');
                }

                dailyForecast(result);
                weatherIcons(result);

                return result;
            })
            .catch(error => { console.log('error', error) });
    }

    // retrieve 5day forecast
    function dailyForecast(result) {
        console.log(result);

        // start at index 1, current day is already printed above, stop at index 5
        var dayForecast = document.getElementById('day-forecast');
        dayForecast.innerHTML = [];
        for (let i = 1; i < 6; i++) {
            var day = document.createElement('div');
            day.classList.add('forecast');
            day.setAttribute('day-number', i);
            dayForecast.appendChild(day);

            console.log(result.daily[i].dt);
            console.log(result.daily[i].temp.day);
            console.log(result.daily[i].humidity);

            var forecastDate = document.createElement('p');
            var forecastTemp = document.createElement('p');
            var forecastHumidity = document.createElement('p');

            forecastDate.textContent = result.daily[i].dt;
            forecastHumidity.textContent = ('Humidity: ' + result.daily[i].humidity + '%');
            forecastTemp.textContent = ('Temperature: ' + result.daily[i].temp.day + '\u00B0F');

            day.appendChild(forecastDate);
            day.appendChild(forecastTemp);
            day.appendChild(forecastHumidity);
        }
    }

    function weatherIcons(result) {

        var firstDay = document.querySelector('[day-number="1"]');
        var iconOne = document.createElement('img');
        iconOne.setAttribute('src', `https://openweathermap.org/img/wn/${result.daily[0].weather[0].icon}@2x.png`);
        firstDay.appendChild(iconOne);
        console.log(firstDay);


        var secondDay = document.querySelector('[day-number="2"]');
        var iconTwo = document.createElement('img');
        iconTwo.setAttribute('src', `https://openweathermap.org/img/wn/${result.daily[1].weather[0].icon}@2x.png`);
        secondDay.appendChild(iconTwo);
        console.log(secondDay);

        var thirdDay = document.querySelector('[day-number="3"]');
        var iconThree = document.createElement('img');
        iconThree.setAttribute('src', `https://openweathermap.org/img/wn/${result.daily[2].weather[0].icon}@2x.png`);
        thirdDay.appendChild(iconThree);
        console.log(thirdDay);

        var fourthDay = document.querySelector('[day-number="4"]');
        var iconFour = document.createElement('img');
        iconFour.setAttribute('src', `https://openweathermap.org/img/wn/${result.daily[3].weather[0].icon}@2x.png`);
        fourthDay.appendChild(iconFour);
        console.log(fourthDay);
        
        var fifthDay = document.querySelector('[day-number="5"]');
        var iconFive = document.createElement('img');
        iconFive.setAttribute('src', `https://openweathermap.org/img/wn/${result.daily[4].weather[0].icon}@2x.png`);
        fifthDay.appendChild(iconFive);
        console.log(fifthDay);

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
