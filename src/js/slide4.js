var Image = [ "acc1.jpg","acc2.jpg","acc3.jpg","acc4.jpg","acc5.jpg","acc6.jpg","acc7.jpg","acc8.jpg","acc9.jpg"];
var idx = 0;
function sl4addImage() {
    for (var i = 0; i < 9; i++)
    {
        setTimeout(function () {
            sl4addDiv();
            idx++;
        }, 500 * i);
    }    
}
function sl4addDiv() {
    $("#slide4-left-container").append("<div class=\"sl4-image image-zoom\"><img src=\"./resources/images/"+Image[idx]+"\" alt=\"\" class=\"image\"></div>");
}

