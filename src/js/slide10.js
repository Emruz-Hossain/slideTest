function startSl10() {
    setTimeout(function () {
    
        typeTextTime(".sl10-text", "Low Distance Warning System", 50);
        
    }, 2000);

    setTimeout(function () {
        startVesselMovement();
    },4000);
}

function startVesselMovement() {
    $(".sl10-ship1").css("animation-play-state", "running");
    $(".sl10-cargo").css("animation-play-state", "running");
    setTimeout(function () {
        $(".up-arrow").css("animation-play-state", "running");
        $(".down-arrow").css("animation-play-state", "running");
        $(".up-arrow").css("display", "block");
        $(".down-arrow").css("display", "block");
    }, 3000);
    
    setTimeout(function () {
        $(".up-arrow").css("display", "none");
        $(".down-arrow").css("display", "none");
    },6000);
}
