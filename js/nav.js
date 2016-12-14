 
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".topbar").addClass('small');
        } else {
            $(".topbar").removeClass("small");
        }
    });
});