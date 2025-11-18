
$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor = $("#crColor").val();
        let crEyesNum = $("#crEyesNum").val();
        let crEyesHTML = "";
        let crSize = $("#crSize").val();
        for (let i = 0; i < crEyesNum; i++) {
            crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";

        }

        // check for the field value do not add empty ones
        if ((crName == "") || (crName.length > 12)) { // do nothing 
        }
        else {
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background-color: ${crColor}">${crEyesHTML}</div>
    <div class="creature-info">${crName}</div>
</div>
`);
        }
        // remove the name after it's added
        $("#crName").val("");

    });
if (crSize == "Small") {$(".creature-body"), "width: 50px" + "height: 50px"};
        if (crSize == "Medium") {$(".creature-body"), "width: 100px" + "height: 100px"};
        if (crSize == "Big") {$(".creature-body"), "width: 150px" + "height: 150px"};