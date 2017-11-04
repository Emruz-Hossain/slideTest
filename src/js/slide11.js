function startSl11() {
    typeTextTime(".sl11-text", "Real Time Monitoring System", 50);
    setTimeout(function () {
        startAnimation11();
    },1000);
}
function startAnimation11() {
    $(".sl11-ship").css("animation-play-state", "running");
    setTimeout(function () {
        $(".sl11-ship").css("animation", "sink 2s");
        setTimeout(function () {
            $(".sl11-ship").css("transform", "skew(0deg,-30deg)");
            $(".report").css("display", "block");
            $(".report").css("animation-play-state", "running");
            setTimeout(function () {
                startCMU();
            }, 1000);
        }, 2000);
    }, 5000);
    
}
function startCMU() {
    $(".cmu").css("animation-play-state", "running");
    $(".cmu").css("display", "block");

    setTimeout(function () {
        $(".cmu-rescue").css("display", "block");
        $(".cmu-send-rescue").css("display", "block");
    }, 2000);
    setTimeout(function () {
        closeCMU();
    }, 4000);
}
function closeCMU()
{
    $(".cmu").css("animation", "to-left 2s");
    setTimeout(function () {
        $(".cmu").css("display", "none");
        sendRescueBoat();
    }, 2000);
}
function sendRescueBoat() {
    $(".rescue-boat-reached").css("animation-play-state", "running");
}