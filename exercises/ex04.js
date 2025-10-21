
// add a button that says click me
//let totalNumber = 0;
//let colors= ["Orchid", "Coral", "HotPink", "Plum"]
// when it is clicked
//$("#needy-button").click( function()   {
    // add one to the total number
    //totalNumber = totalNumber - 1;

    //show the total number
    // show "clicked x amount of times" 
    //$("#needy-button").html("you are currently " + totalNumber + " dollars in debt.");
//});  

let count= 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];
$("#needy-button").click( function()   {
    let reminder=count % colors.length;

    $ ("#needy-button") .html( "Clicks: " + count + " Color: " + colors[reminder] );
count=count+1;

    $("body").css("background-color", colors[reminder]);

});


// add a top limit