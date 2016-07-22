
function doSetTimeout (u) {
    setTimeout(function() {
        u.addClass('on');
        console.log(u[0]);
    }, 1000);
}

$(document).ready(function(){
    $('.line-tip').on('mouseenter', this, function(){
        var stops = $(this).siblings('.path-stops');
        stops.addClass('add');
    });
});
