// test all these url's in postman first to make sure im getting back what i want to get back!!
// - Your API key is 0f9dd32babe408905fb98d5398ec6131
// API key:
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

    // global var's
        // var requestUrl, searchBtn, cityName
    var searchBtn = document.getElementById('search-button');
    var cityName = document.getElementById('city-name');
    var requestUrl = 'api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={0f9dd32babe408905fb98d5398ec6131}';

    // function init gets api data
    function getApi() {
        // create list item for each city, append to the city list
        var cityList = document.querySelector('ul');
        var listItem = document.createElement('li');
        listItem.textContent = cityName.value;
        listItem.classList.add('list-item')
        cityList.appendChild(listItem);

        fetch(requestUrl)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                for (var i = 0; i < data.length; i++) {


                }
            })
    }


// function getApi()
    // var cityEl = url for a cities weather
    // create a todayEl
    // create a 5dayForecastEl
    // date
    // city
    // temp, humidity, windspeed, uv index
    // icon


// add event listener search button 'click' getApi(requestUrl) function
searchBtn.addEventListener('click', getApi);

// local storage, dont need to push cities to an array
// refresh saves the last city that she looked up, will be displayed on page
});
