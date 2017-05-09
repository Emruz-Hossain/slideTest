function sl9Start() {
    
    typeTextTime(".sl9-text", "Overload Detection System", 50);
    setTimeout(function () {
        sl9StartAnimation();
    }, 2000);
}
function sl9StartAnimation() {

    var count = 1;
    $(".passenger").css("animation-play-state", "running");
      $(".engine").css("animation-play-state", "running");
    for (var i = 1; i <= 12; i++)
    {
    setTimeout(function () {
        var load = "Load: " + count * 10;
        var status = "Status: ";
        if (count <= 10)
        {
            status += "Safe";
        }   
        else
        {
            status += "Overloaded";
            $(".engine").css("animation-play-state", "paused");
            $(".engine-status").text("Engine Disabled");
            $(".status").css("background", "red");
            $(".overloaded-user-app").css("animation", "popup 0.5s");
            $(".overloaded-user-app").css("display", "block");
        }
        load += "%";
        $(".load-status").text(load);
        $(".safety-status").text(status);
        count++;
        
    },i*500);
    }
    setTimeout(function () {
        reverseAnimation();
    },7000);    
    
}
function reverseAnimation() {
        $(".passenger").css("animation-direction", "reverse");
        $(".passenger").css("animation-iteration-count", "16");
        $(".passenger").css("animation-play-state", "running");
        var cnt2 = 12;
        for (var j = 0; j < 2; j++) {
            setTimeout(function () {
            cnt2--;
                var load = "Load: " + cnt2* 10;
                load += "%";
                var status = "Status: ";
                console.log(cnt2);
                if (cnt2==10) {
                    status += "Safe";
                    $(".engine").css("animation-play-state", "running");
                    $(".engine-status").text("Engine Enabled");
                    $(".status").css("background", "#007446");
                    $(".overloaded-user-app").css("animation", "popdown 0.5s");
                    setTimeout(function () {
                        
                        $(".overloaded-user-app").css("display", "none");
                    }, 500);
                }
                else {
                    status += "Overloaded";
                }
                $(".load-status").text(load);
                $(".safety-status").text(status);

            },j*500);
        }
        setTimeout(function () {
            animateShip();
        }, 3000);
}

function animateShip() {
     $(".passenger").css("display", "none");
    $(".status").css("display", "none");
    $(".engine").css("display", "none");
    $(".engine-status").css("display", "none");
    $(".ship").css("animation-play-state", "running");
    setTimeout(function () {
        $(".ship").css("display", "none");
    },3000);
}