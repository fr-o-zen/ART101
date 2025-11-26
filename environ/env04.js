let bigTitle = "BEOWULF BEGINS";
let height = "6'7";
let weight = 287;
let beoLikes = ["folded steel", "The Hurting", "justice", "merchandise"];

$("#titleoutput").html(bigTitle);

let statSheet = "height: " + height + " weight: " + weight;
let favorites = "Likes: " + beoLikes.join(", ");

$("#statoutput").html(statSheet);
$("#likesoutput").html(favorites);

// FIXED pose list
let beowulfPoses = ["beowulf_burst", "beowulf_victory", "beowulf_punch"];
let currentPoseIndex = 0;

// FIXED makeImage() – removes old image first
function makeImage(imageName) {
    $("#beowulf-output").empty();  // remove previous image
    $("#beowulf-output").append(
        "<img width='400' src='images/" + imageName + ".png'>"
    );
}

// On button click, cycle through all poses
$("#beo-pose1").click(function () {

    // Get the current pose
    let poseToShow = beowulfPoses[currentPoseIndex];

    // Show it
    makeImage(poseToShow);

    // Move to next pose (loop back to 0 at end)
    currentPoseIndex++;
    if (currentPoseIndex >= beowulfPoses.length) {
        currentPoseIndex = 0;
    }
});
