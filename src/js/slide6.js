var accImage = ["sl6-1.jpg", "sl6-2.jpg", "sl6-3.jpg", "sl6-4.jpg", "sl6-5.jpg"];
var accDetails = [
    "MV Nazreen-1#Sank date: 8 July 2003#Licenced Capacity: 293 people#Carrying: 750+#Died: 530+#Cause of Accident: Overload + Ecessive current",
    "MV Salahuddin-2#Sank date: 3 May 2002#Licenced Capacity: 310 people#Carrying: 600+#Died: 450+#Cause of Accident: Overload + Storm",
    "MV Shariatpur-1#Sank date: 12 March 2012#Licenced Capacity: unknown#Carrying: 200+#Died: 116+#Cause of Accident: Collision with Cargo vessel",
    "MV Miraj-4#Sank date: 15 May 2014#Licenced Capacity: 122 people#Carrying: 150-200#Died: 56#Cause of Accident: Overload + Storm",
    "Pinak-6#Sank date: 04 August 2014#Licenced Capacity: 120-150 people#Carrying: 350+#Died: 45+#Cause of Accident: Overload + Adverse weather"
];
var idx = 0;
var idx2 = 0;
function sl6addImage() {
     $('.center-text').append("<p class=\"font-white f24\">Let's study some major maritime accidents of Bangladesh.</p>");
     setTimeout(function () {
         $('.center-text').css("animation", "zoom-out 1s");
         setTimeout(function () {
             $('.center-text').css("display", "none");

        for (var i = 0; i < 5; i++)
        {
            setTimeout(function () {
                sl6addImage2();
                setTimeout(function () {
                    sl6addText();
                },10);
                idx++;
            }, 9000 * i);
        }    
         }, 1000);
    },3000);
}
function sl6addImage2() {
    $(".sl6-image").html("<img src=\"./resources/images/" + accImage[idx] + "\" alt=\"\" class=\"sl6-accImage animate-zoom\">");
}

function sl6addText() {
    var str = accDetails[idx2].split("#");
    var index = 0;
    $('.sl6-text-holder').html("<p class=\"sl6-text-box0 sl6-text-box font-white f24 tcenter\"></p>");
    typeTextFast(".sl6-text-box0", str[index]);
    index++;
    $('.sl6-text-holder').append("<hr>");
    var ap = 1;
    for (var j = 1; j < 6; j++)
    {
        setTimeout(function () {
            var cls = "sl6-text-box";
            cls=cls+ap;
            var cls2 = ".sl6-text-box";
            cls2=cls2+ap;
            // console.log(cls);
            // console.log(cls2);
            $('.sl6-text-holder').append("<p class=\""+cls+" sl6-text-box  font-white f18 tcenter\"></p>");
            typeTextFast(cls2, str[ap]);
            ap++;
            
        },500*j);
    }
    idx2++;
}