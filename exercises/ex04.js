
// add a button that says click me
totalNumber = 0;
// when it is clicked
$("#needy-button").click( function()   {
    // add one to the total number
    totalNumber = totalNumber - 1;

    //show the total number
    // show "clicked x amount of times" 
    $("#needy-button").html("you are currently " + totalNumber + " dollars in debt.");
});  


// add a top limit