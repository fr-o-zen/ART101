// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "Uber/rideshare", "walking", "bumming off friends"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Car",
    route: 18,
    print: "Bumming off my friends",
    has4Doors: true,
    drivers: ["Christian", "Kylan", "Lucas"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);