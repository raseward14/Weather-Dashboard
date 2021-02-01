# Weather-Dashboard

## Description
Open the planner daily to see a new date displayed at the top. Each standard working hour includes a text area where events can be entered, and saved by clicking the save button to the right. Once an event is saved, the user can refresh, or exit the window without losing their plans. Additionally, the current hour is color coded red, while future hours are green, and past hours are greyed out.

My goal was to write the entire program in Javascript, with the aid of jQuery. You will see two script files, one of which is included to show the process of learning the moment.js library. My final js includes a forloop where all html elements, and classes are assigned. The goal here was simplicity. Because, the next challenge came from assigning past, present, and future 'classes' to each hour, allowing the background color to change as the current time does. This required the assignment of a data attribute, because I was having trouble representing the '8am'and '9am' hours as 'smaller'than the 'pm'hours. A data-hour attribute was the result. Later on, setting items to local storage, and getting them proved a challenge. The final result is shown by creating variables for each hour with the data hour attribute as the value. This took some time to get to. 
**[Check it out Here!](https://raseward14.github.io/Work-Day-Scheduler/)**

I learned a lot from writing the entire code in JS, assigning data hour attributes to the textarea elements, and using the data hour attributes to get objects from local storage. The only way to improve is to push yourself!

## Table of Contents
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Usage
* **The Finished Product**  
![Random Password Generator](assets/images/scheduler.png)

## Credits
Here are a few resources that helped me get this project knocked out!
* [OpenWeather](https://openweathermap.org/appid)

## License
©2021 Richard Seward. All Rights Reserved.



