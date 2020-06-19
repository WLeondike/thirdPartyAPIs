// GLOBALS


//TODOS
//1. Display current time using Moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"))



//2. Click event to save the text area content to local storage

//3. When app opens, display content for each time block from local storage. 
// - it can be done with a loop (more efficient) or by targeting each time block separately

//4. Change time block background color depending in the current hour (past, present, and future).

function timeBlock() {
    const presentTime = moment().hours();
    $(".row").each(function () {
        const plannerRow = parseInt($(this).attr("id"));
        if (plannerRow < presentTime) {
            $(this).addClass("past");
        }
        else if (plannerRow === presentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

$("#9am .userInput").val(localStorage.getItem("9am"));
$("#10am .userInput").val(localStorage.getItem("10am"));
$("#11am .userInput").val(localStorage.getItem("11am"));
$("#12pm .userInput").val(localStorage.getItem("12pm"));
$("#1pm .userInput").val(localStorage.getItem("1pm"));
$("#2pm .userInput").val(localStorage.getItem("2pm"));
$("#3pm .userInput").val(localStorage.getItem("3pm"));
$("#4pm .userInput").val(localStorage.getItem("4pm"));
$("#5pm .userInput").val(localStorage.getItem("5pm"));
$("#6pm .userInput").val(localStorage.getItem("6pm"));
$("#7pm .userInput").val(localStorage.getItem("7pm"));
$("#8pm .userInput").val(localStorage.getItem("8pm"));
$("#9pm .userInput").val(localStorage.getItem("9pm"));

$(document).ready(function(){

    $(".saved").on("click", function() {
        const value = $(this).siblings(".userInput").val();
        const presentTime= $(this).parent().attr("id");
        localStorage.setItem(presentTime, value);
    });

    timeBlock();
        const interval = setInterval(timeBlock, 60000);
});