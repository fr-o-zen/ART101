
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

let mood= ["fresh and happy", "keep pushing", "so tired!"];
let count= 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];
$("#needy-button").click( function()   {
    let reminder=count % colors.length;
    if (count < 5) {currentMood=mood[0]}   else {currentMood=mood[2]};
    if (count >= 5 && count < 10 ) {currentMood=mood[1]}; 
    $ ("#needy-button") .html( "Clicks: " + count + " Color: " + colors[reminder] + " Mood: " + currentMood );
     $("body").css("background-color", colors[reminder]);

count=count+1;

});


// add a top limit