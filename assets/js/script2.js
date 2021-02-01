// let the pseudocoding begin! ...tomorrow morning


// activity 21, 22, 23 getting and displaying diff repos, or query strings
// URL as a var- see activity 20
// .then
// URL var to link to weather dashboard- fetch- see activity 17






// activity 20 --2 global vars badRequestUrl, redirectUrl, fetch(badRequestUrl), .then function(response) if response.status is 404 document.location.replace(redirectUrl) so if the url is a 404 or bad it will redirect to the error site, else return response.json(); object, .then(data => log the data) --> this is just another way to write the function!

// var badRequestUrl = 'https://api.github.com/unicorns';
// var redirectUrl = './404.html';

// fetch(badRequestUrl)
//   .then(function (response) {
//     // Use a conditional to check the response status.
//     if (response.status === 404) {
//       document.location.replace(redirectUrl); // if bad, redirect to the we have problems page! we are fresh out!
//     } else {
//       return response.JSON();
//     }
//     // If that status equals the conditional, then redirect to the 404 page.
//   })
//   .then(data => {
//     console.log(data);
//   });

// when fetching the URL checking to see what the response it, created function by if statement

// if response.status is 404 error, make sure redirects to correct location, 404 html page

// location.document shows you where you are at

// allows us to set URL's as variables, if user tries to do something not allowed, takes them to a page for that

// to return from a .then, can make another promise








// activity 18 -- cache

// fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  // The browser fetches the resource from the remote server without first looking in the catche
  // The browser will then update the cache with the downloaded resource.
  // two parameters, first is URL, 2nd is the cache, can set cache to reload
  // cache is short term memory
//   cache: 'reload'
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

  // using several diff api's, need to get into docs and figure out how they work quickly

  // figure out what i need to do, postman will create the javascript for me

  // use postman to test it, save it, get into docs and figure out how to use them









// activity 17
// var perPage = 10;

// can insert variables directly into the url query string
// ${} template literal
// could also concat

// GET info sent back --- default
// POST https request to data to have action taken upon
// a form, take info, send back to my api to store it
// PUT
// DELETE
// FETCH

// fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
//   method: 'GET', //GET is the default.
//   credentials: 'same-origin', // include, *same-origin, omit
//   redirect: 'follow', // manual, *follow, error
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

  // to use fetch must use a URL- first parameter










// activity 16 -- base URL <= ? => query strings have parameter&parameter&parameter&parameter -> find these in the docs

// fetch(
//   // Explain each parameter in comments below.
//   'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
// Parameter explanation.

// query strings, everything after ? mark- query string has begun

// docs.github.com for parameter explanations- ctrl f can find the parameters

// per_page - grabbing 10 objects per page
// state - open
// sort - can be created, updated, or comments
// direction - equals description descending order from when it was created, first is most recent issue

// base URL, everything before ? mark

// all possible parameters are in the documentation of the API










// activity 15- fetches url, .then function(response) returns response.json() object, .then function (data) logs the data 
//to know if parameter will work, search in api docs- & adds more parameters

// fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=3') /// the three shows how many, query parameters
// // query parameters start at ? add more using & can add parameters onto the end of the url
// // to know if the parameters will work, search in the API docs
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });








// activity 14- 2 global var's badRequestUrl and responseText by element id, getApi(badRequestUrl) function is called with badRequestUrl as the parameter passed, function getApi(requestUrl), fetches(requestUrl), .then function (response), if response is not 200 good, responsetext.textContent = response.status, return response.json(); returns the responst to the html page, .then function (data) logs the data

// how to run a function requesting an api url including a .then function
// the function getapi(getURL) => will default to 'request' must be the same as fetch(getURL)

// var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';
// var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       // Check the console first to see the response.status
//       console.log(response.status);
//       // Then write the conditional based on that response.status value
//       if (response !== 200) {
//         responseText.textContent = response.status;
//       }
//       // Make sure to display the response on the page
//       return response.json();
//     })
//     .then(function (data) {
//       // look at response in console read how 404 is structured
//       console.log(data);
//     });
// }

// getApi(badRequestUrl);

// 4 http methods most popular one is get post put delete






// activity 13-- global var's requestUrl and resonseText gets element by id, function getApi(requestUrl) fetches(requestedUrl), .then function response returns response.json object, .then function data logs the data object

// var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

// var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {return response.json();})
//     .then(function (data) {
//       console.log(data);
//     });
// }










// activity 12 -- global var requestUrl, fetches requestUrl, .then function response returns response.json() object, .then function data logs the object

// requestUrl = 'https://api.github.com/orgs/nodejs/repos';

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json(); // returns an object
//   })
//   .then(function (data) {
//     console.log(data); // pulls data to log it
//   });






// activity 11 -- 2 global var's, requestUrl and badRequestUrl, fetches requestUrl, .then function response returns response.json object, then function data -- timeblocks, quiz questions, weather, whatever needs updated happens

// var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
// var badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad';

// fetch(requestUrl)
//   .then(function (response) { // get whole response
//     return response.json();
//   })
//   .then(function (data) { // send to follow up then- timeblocks, quiz questions, weather, whatever needs to be updated
//     console.log(data);
//   });

// fetch(badRequestUrl)
//   .then(function (response) {
//     return response.json(); // network activity tab in devtools
//   })
//   .then(function (data) {
//     console.log(data);
//   });









// activity 10 -- container, fetch button, fetchbutton event listener, runs getapi function, with requesturl var, fetches the url, returns a json object, then runs a for loop with data, creates h3 element for var githubuser, and creates p element for var githublink, sets the text content the data[i].url and for data[i].login, takes usercontainer and appends both var's github user and githublink to it
// var userContainer = document.getElementById('users');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   var requestUrl = 'https://api.github.com/users?per_page=5';

//   fetch(requestUrl) // fetch is just a function that calls the url
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // Use the console to examine the response
//       console.log(data);
//       // TODO: Loop through the data and generate your HTML
//       for (let i = 0; i < data.length; i++) {

//         // create elements to be added to the page
//         var gitHubUser = document.createElement('h3');
//         var gitHubLinks = document.createElement('p');

//         // set the txt content of the h3 and p element
//         gitHubLinks.textContent = data[i].url; // the [i] just specifies which object in the array is being printed
//         gitHubUser.textContent = data[i].login;

//         // dynamically appending the elements to the html div associated with id='users'
//         // append will attach the element as the bottom most child
//         userContainer.append(gitHubUser);
//         userContainer.append(gitHubLinks);      
//       }
//     });
// }
// fetchButton.addEventListener('click', getApi);
// a list of stuff we got from an api
// to do stuff from it later- save the id
// if i am displaying this with an element on a page, auto get data back with indexes, need to add attribute to element in html using attribute 'data-id' uniquely identify this element, add it, notes to it, make it unique









// activity 9 -- click event listener to fetch button, calls function getApi, two global var's issuecontainer element with issues id and var for fetch button, getApi var request url, fetch requestUrl, return json object, .then(function(data) {}) creates for loop creating h3 element var username, h4 elemetn var issueTitle, p element var issueBody, sets textContent to data[i].user.login data[i].title data[i].body, then issue container appends all three var userName issueTitle and issueBody

// var issueContainer = document.getElementById('issues');
// var fetchButton = document.getElementById('fetch-button');

// function save to favorites
  // use local storage to end

// function getApi() {
//   var requestUrl = 'https://api.github.com/repos/IBM/clai/issues?per_page=5';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         var userName = document.createElement('h3');
//         var issueTitle = document.createElement('h4');
//         var issueBody = document.createElement('p');
//         userName.textContent = data[i].user.login;
//         issueTitle.textContent = data[i].title;
//         issueBody.textContent = data[i].body;
//         issueContainer.append(userName);
//         issueContainer.append(issueTitle);
//         issueContainer.append(issueBody);
//       }
//       // do something here to control flow, look at datacode pseudocode
//     });
// }
// fetchButton.addEventListener('click', getApi);








// activity 8 -- global var request URL, fetch requestUrl, .then function response to return response.json, .then function data to create for loop data.length or 5 in this example, log data[i].url and data[i].user.login

// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
// var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5'; // this will also get only 5 issues for twitters chill repo

// // ?page_value&keyvalue
// // google this github api repo issues by owner
// // https: URL GOES HERE <-/repos/{owner}/{repo}/issues ->ctrl f helped me get this from docs.github.com
// // test API'S with postman

// // read the documentation first, test the API before starting to write code

// // will predominately use JSON- will return an array of objects

// fetch(requestUrl)
//   .then(function (response) { // .then calls a promise, i promise you, if you get something for me, then ill use it
//     return response.json(); // fetch response, then turn it into a json
//   })
//   .then(function (data) { // will use the data from the promise
//     console.log('Github Repo Issues \n----------'); \n means new line then execute rest of code
//     // console.log(data);
//     // TODO: Loop through the response
//     // TODO: Console log each issue's URL and each user's login
//     for (let i = 0; i < 5; i++) {
//       console.log(data[i].url); // will display each objects from array name
//      console.log(data[i].user.login);
//     }
//   });








// activity 7- fetch a url, .then function the response to return a response.json, .then function the data

// fetch('https://api.github.com/orgs/twitter/public_members')
//   .then(function (response) {
//     return response.json(); // fetch response, turn it into a json
//   })
//   .then(function (data) { // .then means working with promises-- i promise you, if you get something for me THEN ill use it
//     console.log('Twitter Public Members: Raw data \n----------'); // \n means new line, then execute the rest of the code
//     console.log(data);
//   });

// fetch('https://api.github.com/orgs/twitter/repos')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) { // will use the data from the promise
//     console.log('Twitter Repositories: Names only \n----------');
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].name); // will display each objects from array's name
//     }
//   });








// activity 6- diff methods for calling api info

// var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// // JQuery AJAX
// // TODO: Comment on how AJAX returns an API call
// $.ajax({
//   url: requestUrl,
//   method: 'GET',
// }).then(function (response) {
//   console.log('AJAX Response \n-------------');
//   console.log(response);
// });

// // Browser Fetch Method
// // TODO: Comment on how Fetch returns an API call
// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Fetch Response \n-------------');
//     console.log(data);
//   });

// // Browser XMLHttpRequest
// // TODO: Comment on how XMLHttpRequest returns an API call
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     console.log('XMLHttpRequest Response \n-------------');
//     console.log(xhr.response);
//   }
// };
// xhr.open('GET', requestUrl);
// xhr.send();
// TODO: Comment on the differences on the format of the data that was returned









// activity 5 - diff request syntaxes- XMLHTTP very old, AJAX old

// var requestUrl = 'https://api.github.com/users';

// //Browser XMLHttpRequest, built in the browser and require more code.
// var xhr = new XMLHttpRequest(); // very old
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     console.log('XMLHttpRequest Response \n-------------');
//     console.log(xhr.response);
//   }
// };
// xhr.open('GET', requestUrl);
// xhr.send();

// // AJAX call requires a third party library, jQuery
// $.ajax({ // will see on code older than 2 months -- https type requests -- very popular
//   url: requestUrl,
//   method: 'GET',
// }).then(function (response) { // turns into a JSON
//   console.log('Ajax Reponse \n-------------'); // post put get delete
//   console.log(response);
// });

 // want to display repos next to username

  // if we want to print the objects in array, use for loop

  // to print the repos- users/repos url

  // for other API's look into the docs

  // google API- mapquest developers look for examples, GET - thow it in my variables
  // var requestUrl = 'https://api.github.com/users';









// activity 4-- create a fetch request-- query selector, with a ul var repoList, id var fetchButton, fetchbuttoneventlistener on click runs function getApi with var requestUrl, fetch requestUrl .then function's reponse returns a json object, .then function (data) runs a for loop for data.length creating var listItem li element, sets txtContent to data[i].html_url, repoList appends the listItem

// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');
// var userName = ["kc135q", "bahuisken"] // do a for loop, and can get a bunch of usernames printed

// //getApi function is called when the fetchButton is clicked

// function getApi() {
//   // Insert the API url to get a list of your repos
//   // the ticks say this is special, to do this dynamically, put variable name ${} inside instead of raseward14
//   var requestUrl = 'https://api.github.com/users/raseward14/repos';

//   fetch(requestUrl) // this fetch is saving the response and returning as an object- JSON- object or array
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data); will show its an array
//       //looping over the fetch response and inserting the URL of your repos into a list
//       for (var i = 0; i < data.length; i++) { // because this is a .length, its an array
//         //Create a list element
//         var listItem = document.createElement('li');

//         //Set the text of the list element to the JSON response's .html_url property
//         listItem.textContent = data[i].html_url;

//         //Append the li element to the id associated with the ul element.
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);








// activity 3 -- create a fetch request-- print data table to html, global var tableBody get element by id repo-table, var fetchButton gets element id fetch-button, on click event listener calls funtion get Api, var requestUrl, fetch requestUrl .then function the response to return a json object, .then function (data) with a for loop data.length, creates elements var createTableRow createElement tr, var tableData createElement 'td' var link createElement 'a', sets link textContent to data.[i].html_url, link.hret to data[i].html_url, tableData appends child link, createTableRow appends child var tableData, tablebody appends child createTableRow

// var tableBody = document.getElementById('repo-table');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//   fetch(requestUrl) // then fetch
//     .then(function (response) {return response.json();}) // returning the JSON object JavaScriptObjectNotation
//     .then(function (data) { // that object is sent down to data variable name .then is a special method for promises
//       console.log(data); // whoever wrote response.json- they will return someObject, can be caught with data - common or (data, error)
//       //Loop over the data to generate a table, each table row will have a link to the repo url
//       for (var i = 0; i < data.length; i++) { // the object will be array of objects
//         // Creating elements, tablerow, tabledata, and anchor
//         var createTableRow = document.createElement('tr');
//         var tableData = document.createElement('td');
//         var link = document.createElement('a');

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url; // referring the the element we are currently at in array
//         link.href = data[i].html_url; // another place to see what object looks like- documentation on postman

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//       // call things from within the code block, lexical scope
//     });
//   // end here
// }

// fetchButton.addEventListener('click', getApi); // on click get api runs function

// functions
// event listeners
// call backs- a whole function being called in as a parameter
// promise .then- lined up, more orderly, next level of callback, has specific methods associated with it
// asynchronous 








// activity 2 -- curl from command line, must have https, http doesnt work

// When the command `curl http://api.github.com` is run from the command line, the output includes the following data:
// does not print any data
// The command `curl https://api.github.com` does print data to the command line.








// activity 1 -- callback functions -- promise functions

// callback is a function that is passed into another function
// CALLBACK
// function getPlayers(numberRequired, cb) {
//     // in this case, number required is 2
//     let error = null;
//     // create variable for players
//     const players = [
//         {name: 'me', age: 2}, {name: 'you', age: 3}
//     ]

//     // list players
//     console.log(players);

//     // check to see if we have enough players to play
//     if (players.length < numberRequired) {
//         // if not return an error
//         error = 'Not enough players'
//     }
//     cb(error, players) // call it and send data back that we are expecting to see
// }

// // call getPlayers
// getPlayers(2, (err, data) => { // this is just a way to write a function
//     if (err) {
//         console.log('err', err);
//         // handle the error --- get more players or tell user they only have 2
//     } else {
//         console.log('data');
//         console.log(data);    
//     }

// })

// callback is to run one function within another
// .then or .catch is a promise

// callbacks are in older js code
// promises are in newer js code

// const do not plan on reassigning the whole variable again
// let means can reassign whole variable at will

// PROMISE
// const iPromise = (whatAmI) => {
//     return new Promise((resolve, reject) => {
//       if (whatAmI) {
//         resolve("that's it");
//       } else {
//         reject(new Error("You have failed this city!!!"));
//       }
//     });
//   };
//   ​
//   const whatsUp = iPromise(true)
//     .then((data) => {
//       // all good, keep going
//       console.log(data);
//     })
//     .catch((error) => {
//       // bad, throw error
//       console.log(error);
//     });





