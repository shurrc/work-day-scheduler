//Dependencies
//A container for the current day, which is updated automatically
//container that holds the schedule
    //segmented by hours in the day 
//form to enter text
    //button to save text
// var planner = document.getElementById("planner");
var TimeBlock = $(".row");
var planner = $("#planner");
var times = [
    moment("09", "HH").format("H"),
    moment("10", "HH").format("H"),
    moment("11", "HH").format("H"),
    moment("12", "HH").format("H"),
    moment("13", "HH").format("H"),
    moment("14", "HH").format("H"),
    moment("15", "HH").format("H"),
    moment("16", "HH").format("H"),
    moment("17", "HH").format("H"),
]
var currentHour = moment().hour()

function renderTable () {
    for (var i=0; i < times.length; i++) {
        //check if current hour is < than times[i] - block will be in  the future

        //check if  current hour === times[i] - block will be the  presesnt
        //else block is in the past
        var savedNote = localStorage.getItem(times[i])
        if (!savedNote) {
            savedNote = ""
        }
        planner.append("<div class='row'><p class='col-1'>" + times[i] + "</p><textarea class='col-10 border' value='' >" + savedNote + "</textarea><button class='col-1 btn save-button'data-time='"+ times[i] + "'>💾</button></div>");
        if (currentHour < times[i]) {
            $('.row').addClass('future');
        } else if (currentHour == times[i]) {
            $('.row').addClass('present')
        } else if (currentHour > times[i]) {
            $('.row').addClass('past')
        }
    }
    $(".save-button").each(function()   {
        $(this).click(saveNote)
    })


}
renderTable()


console.log(currentHour)


function saveNote(event) {
    console.log(event)
    var noteToSave = event.target.parentElement.children[1].value
    var timeSlot = event.target.dataset.time
    console.log(timeSlot)
    localStorage.setItem(timeSlot, noteToSave)
    console.log(noteToSave)
}
    

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