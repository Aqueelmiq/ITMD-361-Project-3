(function($) {

    $("#nav-overlay").hide();

    $("#nav-button").click(function(){
        $("#nav-overlay").show();
    });

    $("#nav-close-button").click(function(){
        $("#nav-overlay").hide();
    });

}(jQuery));