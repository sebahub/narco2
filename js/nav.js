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
    
$(document).ready(function(){
$('.termin h3').each(function () {
    var dtSt = $(this).html().split(" ");
    var dtAr = dtSt[0].split(".");
    var when = new Date(dtAr[1] + "/" + dtAr[0] + "/" + dtAr[2] + " " + dtSt[1]);
    console.log(when);    
    var now = Date.now();

    if (now - when > 2419200000) {
        $(this).parent().addClass('four_weeks');
    } else if (now - when > 86400000) {
        $(this).parent().addClass('one_day');
    }
    });
});

