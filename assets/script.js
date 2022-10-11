//Dependencies
//A container for the current day, which is updated automatically
//container that holds the schedule
    //segmented by hours in the day 
//form to enter text
    //button to save text
var planner = document.getElementById("planner");

var today = moment();


today.format("dddd, MMMM Do YYYY, h:mm:ss a")
console.log(today)

$("#currentDay").text(today)





//Data
//variable for time
//variable for saved text

//Functions
//automatically update page as time moves forward
//element styling will correspond to change in time
//element created for each hour in the day
//timeblock click will open form
    //form can be filled in with text
    //text in form can be saved
    //saved text will be stored locally




//User Excperience
//When a user open the webpage the current day is displayed at the top of the page
//below it is a schedule that corresponds to the current day
    //schedule will be sebmented by the hour in the day.
    //each segment of the schedule will be color coded by whether it is in the past present or future
    //as each segment changes status chroniloggicaly the segment shou automatically update its color.
//when a user clicks on a timeblock an event will open up
    //the user will be able to enter text into the event.
    //when the userclicks save on the event the text will be moved into the schedule
    //the text will be saved and can be reaccessed after exiting the webpage.



//Intialization