
var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


function makeImage (imageName) {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='images/" + imageName + ".jpg'>");
   }

}

function changeBackground (newColor) {
    $("body").css("background-color", newColor) ;
    
}

$(".color-button") .click(function () {
    changeBackground(this.id)

});

// the button part
$("#needy-button").click(function () {
   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   changeBackground(colors[colorCount]);

   makeImage("Coral"); 
   makeImage("Orchid");
   makeImage("HotPink");
   makeImage("Plum");

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});