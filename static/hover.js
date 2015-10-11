$(document).ready(function(){
    $(".details").hover(function(){
        $(".case-img-device").toggleClass("show-img");
        $(".case-title").toggleClass("case-title-move-up");
        $(".case-details").toggleClass("case-details-move");
        $(".case-details").toggleClass("white");
        $(".bg").toggleClass("bg-white");
    });


  $(".logo").hover(function(){
        $(".brand").toggleClass("invisibile");
        $(".logo span").toggleClass("menu-text");
    });


    $(".case-title").hover(function(){
        $(".bg").toggleClass("bg-white");
        $(".case-details").toggleClass("white");
    });


    $(".menu").hover(function(){
        $(".menu i").toggleClass("menu-move");
        $(".menu i").toggleClass("white");
        $(".menu span").toggleClass("menu-text");
    });

});











$(document).ready(function(){
    $(".fa-arrow-right").hover(function(){
        $("#indicator").toggleClass("rotateY-right");
    }, function() {
      $("#indicator").removeClass("rotateY-right");
    });




    $(".fa-arrow-left").hover(function(){
        $("#indicator").addClass("rotateY-left");
    }, function() {
      $("#indicator").removeClass("rotateY-left");
    });
});






