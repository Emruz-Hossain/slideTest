
function typeText(container, str)
{
var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
$(spans).hide().appendTo(container).each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
}

function typeTextFast(container, str)
{
var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
$(spans).hide().appendTo(container).each(function (i) {
    $(this).delay(30 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 30);
});
}

