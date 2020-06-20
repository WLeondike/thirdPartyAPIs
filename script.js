//Display current time using Moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"))

//Change time block background color depending in the current hour (past, present, and future).
function timeBlock() {
    const presentTime = moment().hours();
    $(".row").each(function () {
        const plannerRow = parseInt($(this).attr("id"));
        //if time listed is before current time color grey
        if (plannerRow < presentTime) {
            $(this).addClass("past");
        }
        //if current time matches time listed, color red
        else if (plannerRow === presentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        //time after current time color green
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

//When app opens, display content for each time block from local storage. 
// - it can be done with a loop (more efficient) or by targeting each time block separately
$("#9 .userInput").val(localStorage.getItem("9"));
$("#10 .userInput").val(localStorage.getItem("10"));
$("#11 .userInput").val(localStorage.getItem("11"));
$("#12 .userInput").val(localStorage.getItem("12"));
$("#13 .userInput").val(localStorage.getItem("13"));
$("#14 .userInput").val(localStorage.getItem("14"));
$("#15 .userInput").val(localStorage.getItem("15"));
$("#16 .userInput").val(localStorage.getItem("16"));
$("#17 .userInput").val(localStorage.getItem("17"));


//Click event to save the text area content to local storage
$(document).ready(function(){

    $(".saved").on("click", function() {
        const value = $(this).siblings(".userInput").val();
        const presentTime = $(this).parent().attr("id");
        localStorage.setItem(presentTime, value);
    });

    timeBlock();
        const interval = setInterval(timeBlock, 60000);
});
