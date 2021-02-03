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

        // create list item for each city, append to the city list
        var userList = document.querySelector('ul');
        var cityName = document.createElement('li');
        cityName.textContent = userInput.value;
        cityName.classList.add('list-item');
        userList.appendChild(cityName);
        var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName.textContent +'&appid=0f9dd32babe408905fb98d5398ec6131';

        console.log(cityName.textContent);
        // console.log(requestUrl);


        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                
                // create elements to be added to page
                var displayBlock = document.getElementById('display-block');
                var city = document.createElement('h2');
                var icon = document.createElement('i');
                var date = document.createElement('h2');
                var temperature = document.createElement('p');
                var humidity = document.createElement('p');
                var windSpeed = document.createElement('p');
                var UVIndex = document.createElement('p');

                // set text content of the elements
                city.textContent = data[i].city.name;
                icon.textContent = data[i].weather.icon;
                date.textContent = data[i].timezone;
                temperature.textContent = data[i].list.main.temp;
                humidity.textContent = data[i].main.humidity;
                windSpeed.textContent = data[i].wind.speed;
                UVIndex.textContent = data[i].sys.country;
                console.log(list.main.temp);
                
                // dynamically append the elements to the page
                displayBlock.appendChild(city);
                displayBlock.appendChild(icon);
                displayBlock.appendChild(date);
                displayBlock.appendChild(temperature);
                displayBlock.appendChild(humidity);
                displayBlock.appendChild(windSped);
                displayBlock.appendChild(UVIndex);

                }
            })
    }

    // add event listener search button 'click' getApi(requestUrl) function
    searchBtn.addEventListener('click', getApi);
    // local storage, dont need to push cities to an array
    // refresh saves the last city that she looked up, will be displayed on page
});
