//Dependencies
//A container for the current day, which is updated automatically
//container that holds the schedule
    //segmented by hours in the day 
//form to enter text
    //button to save text
// var planner = document.getElementById("planner");
var planner = $("#planner");

function renderTable () {
    var times = [
        moment("09", "HH"),
        moment("10", "HH"),
        moment("11", "HH"),
        moment("12", "HH"),
        moment("13", "HH"),
        moment("14", "HH"),
        moment("15", "HH"),
        moment("16", "HH"),
        moment("17", "HH"),
    ]
    planner.each(times, function(this,  {

    })
}
// planner.append("<li>dog</li>")


var dateTime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
}

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

var nine = moment("09", "HH")
console.log(nine)



// var planner = $("#planner")





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