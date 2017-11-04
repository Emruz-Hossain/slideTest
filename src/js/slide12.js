function startSl12() {
    setTimeout(function () {
        $(".sl12-man").css("display", "block");
        $(".sl12-man").css("animation-play-state", "running");
        setTimeout(function () {
            $(".sl12-man").css("display", "none");
            $(".liked").css("display", "block");
            $(".loved1").css("animation-play-state", "running");
            $(".loved1").css("display", "block");
        },1500);
    }, 4000);
}