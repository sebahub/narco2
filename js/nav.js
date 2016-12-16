<!-- Topbar resize -->


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


<!-- Burgermenü -->

$(document).ready(function(){
    $("#nav_mobile").click(function(){
        $("#button").trigger("click");
    });
});

<!-- Zeit vorbei -->
    
$('#timeTable tr td').each(function () {
    var dtSt = $(this).html().split(" ");
    var dtAr = dtSt[0].split("/");
    var when = new Date(dtAr[1] + "/" + dtAr[0] + "/" + dtAr[2] + " " + dtSt[1]);
    console.log(when);    
    var now = Date.now();
    
    if (now - when > 3600000) {
        $(this).parent('tr').addClass('min60');
    } else if (now - when > 1800000) {
        $(this).parent('tr').addClass('min30');
    }
});