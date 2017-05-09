function sl8Start() {
    $('.sl8-text-holder').html("<h1 class=\"sl8-text font-white tcenter animate-zoom\"></h1>");
    var str = "Can't we provide a safer water transportation system?";
    typeTextTime(".sl8-text", str, 50);
    setTimeout(function () {
        $('.sl8-text-holder').html("<h1 class=\"sl8-text font-white tcenter\"></h1>");
        var str = "Yes, we can.";
        typeTextTime(".sl8-text", str, 50);
    }, 3000);
    setTimeout(function () {
        $('.sl8-text-holder').html("<h1 class=\"sl8-text font-white tcenter animate-zoom\">Welcome to Riverine Vehicle Tracking System</h1>");
    }, 5000);
    setTimeout(function () {
        sl8addItems();
    }, 7000);
} 

function sl8addItems() {
    $('.sl8-text-holder').css("display", "none");
    $('.sl8-rvts-holder').css("animation", "animatezoom 2s");
    $('.sl8-rvts-holder').css("display", "block");
    setTimeout(function () { 
        $('.sl8-overload-holder').css("animation", "animatezoom 2s");
        $('.sl8-overload-holder').css("display", "block");
        $('.sl8-line1').css("display", "block");
    }, 1000);
     setTimeout(function () { 
        $('.sl8-weather-holder').css("animation", "animatezoom 2s");
        $('.sl8-weather-holder').css("display", "block");
        $('.sl8-line2').css("display", "block");
     }, 2000);
     setTimeout(function () { 
        $('.sl8-user-app-holder').css("animation", "animatezoom 2s");
        $('.sl8-user-app-holder').css("display", "block");
        $('.sl8-line3').css("display", "block");
     }, 3000);
     setTimeout(function () { 
        $('.sl8-rtm-holder').css("animation", "animatezoom 2s");
        $('.sl8-rtm-holder').css("display", "block");
        $('.sl8-line4').css("display", "block");
     }, 4000);
     setTimeout(function () { 
        $('.sl8-ldw-holder').css("animation", "animatezoom 2s");
        $('.sl8-ldw-holder').css("display", "block");
        $('.sl8-line5').css("display", "block");
     }, 5000);
         setTimeout(function () { 
             $('.sl8-text2-holder').html("<h1 class=\"sl8-text2 tcenter font-white\"></h1>");
             var str2 = "RVTS is a complete framework to make water transport system digital and safe.";
             typeTextTime(".sl8-text2", str2, 60);
        
    },6000);
}   