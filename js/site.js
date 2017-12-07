(function($) {

    $("#nav-overlay").hide();
    $("#info-dialog").hide();

    $("#nav-button").click(function(){
        $("#nav-overlay").show();
    });

    $("#nav-close-button").click(function(){
        $("#nav-overlay").hide();
    });

    $("#dialog-close-button").click(function(){
        $("#info-dialog").hide();
    });

    $("#cheat-app-btn").click(function(){
        $("#info-dialog").show();
    });

}(jQuery));