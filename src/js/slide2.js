var Image = [ "sl21.jpg","sl22.jpg","sl23.jpg","sl24.jpg"];
var idx = 0;
function addImage() {
    for (var i = 0; i < 4; i++)
    {
        setTimeout(function () {
            addDiv();
            idx++;
        }, 2000 * i);
    }    
}
function addDiv() {
    $(".left-container").append("<div class=\"image-holder image-zoom\"><img src=\"./resources/images/"+Image[idx]+"\" alt=\"\" class=\"image\"></div>");
}