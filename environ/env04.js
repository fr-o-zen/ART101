bigTitle = "BEOWULF BEGINS";
height = "6'7";
weight = 287;
let beoLikes = ["folded steel", "The Hurting", "justice", "merchandise"];


$("#titleoutput").html(bigTitle);
statSheet = "height: " + height + " weight: " + weight 
favorites = "Likes: " + beoLikes[0] + ", " + beoLikes [1] + ", " + beoLikes[2] + ", " + beoLikes[3]

$("#statoutput").html(statSheet);
$("#likesoutput").html(favorites);

//beowulfPoses ["beowulf_burst", "beowulf_victory","beowulf_punch"];

//function makeImage (imageName) {
    //$("#beowulf-output").append("<img width=400 src='images/" + imageName + ".png>");

//}

$("#beo-pose1").click(function () {
    imageName=="beowulf_burst";
    $("#beowulf-output").append("<img width=400 src='images/" + imageName + ".png>");

});