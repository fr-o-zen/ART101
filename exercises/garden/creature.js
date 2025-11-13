
$("#crAdd").click(
    function(){
        
        let crName =$("#crName").val;

        $("#crName").val("");
        
    if (crName=="") || (crName.length>12) {
        // do nothing
     }
    else {
    $("creature-list").append("<div>"+crName+"</div>");
    }
    $("#crName").val("");

});