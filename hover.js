$(document).ready(function(){
    $(".details").hover(function(){
        $(".case-title").addClass("move-up");
		}, function() {
  		$(".case-title").removeClass("move-up");
    });
});


$(document).ready(function(){
    $(".details").hover(function(){
        $(".case-details").addClass("move-down");
		}, function() {
  		$(".case-details").removeClass("move-down");
    });
});


$(document).ready(function(){
    $(".details").hover(function(){
        $(".case-img-device").addClass("show-img");
    }, function() {
      $(".case-img-device").removeClass("show-img");
    });
});


$(document).ready(function(){
    $(".details").hover(function(){
        $(".case-details").addClass("white");
    }, function() {
      $(".case-details").removeClass("white");
    });
});

$(document).ready(function(){
    $(".details").hover(function(){
        $(".bg").removeClass("bg-white");
    }, function() {
      $(".bg").addClass("bg-white");
    });
});


















$(document).ready(function(){
    $(".fa-arrow-right").hover(function(){
        $("#indicator").addClass("rotateY-right");
    }, function() {
      $("#indicator").removeClass("rotateY-right");
    });
});
$(document).ready(function(){
    $(".fa-arrow-left").hover(function(){
        $("#indicator").addClass("rotateY-left");
    }, function() {
      $("#indicator").removeClass("rotateY-left");
    });
});















$(document).ready(function(){
    $(".case-title").hover(function(){
        $(".bg").removeClass("bg-white");
    }, function() {
      $(".bg").addClass("bg-white");
    });
});

$(document).ready(function(){
    $(".case-title").click(function () {
          $(".case-title").addClass("move-up");
          $(".case-details").addClass("move-down");
          $(".case-img-device").addClass("show-img");
    });
     });

