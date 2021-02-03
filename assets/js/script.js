// test all these url's in postman first to make sure im getting back what i want to get back!!
// - Your API key is 0f9dd32babe408905fb98d5398ec6131
// - Within the next couple of hours, it will be activated and ready to use
// - You can later create more API keys on your account page
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
    function getApi() {

        // for each click, create list item for each city, append to the city list
        var userList = document.querySelector('ul');
        var cityName = document.createElement('li');
        cityName.textContent = userInput.value;
        cityName.classList.add('list-item');
        userList.appendChild(cityName);
        var currentDay = document.getElementById('current-day');
        var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName.textContent +'&per_page=6&appid=0f9dd32babe408905fb98d5398ec6131';
        console.log(cityName.textContent);

        // fetch the url with the 5 day forecast
        fetch(requestUrl)
            .then(function (response) {

                // return a json object
                return response.json();
            })
            .then(function (data) {

                console.log(data);
                // and append the city name, and date to the dashboard container
                var cityName = document.createElement('h2');
                cityName.textContent = data.city.name;
                currentDay.appendChild(cityName);


                console.log('city name: ', data.city.name);
                console.log('icon: ', data.list[0].weather.icon);
                console.log('date: ', data.list[0].dt);
                console.log('temperature: ', data.list[0].main.temp);
                console.log('humidity: ', data.list[0].main.humidity);
                console.log('wind speed: ', data.list[0].wind.speed);
            // console.log('UV Index: 'data.list.);


                for (var i = 0; i < data.length; i++) {


                // create elements to be added to page
                // var icon = document.createElement('i');
                // var date = document.createElement('h2');
                // var temperature = document.createElement('p');
                // var humidity = document.createElement('p');
                // var windSpeed = document.createElement('p');
                // var UVIndex = document.createElement('p');



                // set text content of the elements
                // icon.textContent = data[i].weather.icon;
                // date.textContent = data[i].timezone;
                // temperature.textContent = data[i].list.main.temp;
                // humidity.textContent = data[i].main.humidity;
                // windSpeed.textContent = data[i].wind.speed;
                // UVIndex.textContent = data[i].sys.country;
                


                // cityName.textContent = data.city.name;
                // icon.textContent = 'icon';
                // date.textContent = 'date';
                // temperature.textContent = 'temperature';
                // humidity.textContent = 'humidity';
                // windSpeed.textContent = 'wind speed';
                // UVIndex.textContent = 'UV';

                
                // dynamically append the elements to the page
                // dashboardContainer.appendChild(icon);
                // dashboardContainer.appendChild(date);
                // dashboardContainer.appendChild(temperature);
                // dashboardContainer.appendChild(humidity);
                // dashboardContainer.appendChild(windSped);
                // dashboardContainer.appendChild(UVIndex);
                }

            })
    }

    // add event listener search button 'click' getApi(requestUrl) function
    searchBtn.addEventListener('click', getApi);
    // local storage, dont need to push cities to an array
    // refresh saves the last city that she looked up, will be displayed on page
});
