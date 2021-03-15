$(function() {
    $(".carousel").carousel( { interval: 2000} );
    $("#carouselButton").click(function(){
       if($("#carouselButton").children("i").hasClass("fa-pause")) {
           $(".carousel").carousel("pause");
           $("#carouselButton").children("i").removeClass("fa-pause");
           $("#carouselButton").children("i").addClass("fa-play");
        
       } else {
           $(".carousel").carousel("cycle");
           $("#carouselButton").children("i").removeClass("fa-play");
           $("#carouselButton").children("i").addClass("fa-pause");
       }

    }); 

    // reserve campsite button
    $("#reserveButton").click(function(){
        //option "show" will open the modal
        $("#reserveModal").modal("show");
    });  

    //logon Button
    $("#loginButton").click(function(){
        //option "show" will open the modal
        $("#loginModal").modal("show");
    });

});
