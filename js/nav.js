$(document).ready(function(){
// Topbar resize
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".topbar").addClass('small');
        } else {
            $(".topbar").removeClass("small");
        }
    });

// Burgermenü

    $("#nav_mobile").click(function(){
        $("#button").trigger("click");
    });

// Zeit vorbei

    moment.locale("de");
    var termine = [
            {date: moment([2017,9,3]), title: "Proberaum, 73614 Schorndorf", link: "https://www.facebook.com/events/121898684951855"},
            {date: moment([2017,4,2]), title: "Stinkekeller, 73614 Schorndorf", link: "https://www.facebook.com/events/121898684951855"},
            {date: moment([2017,5,5]), title: "Proberaum, 73614 Schorndorf", link: "https://www.facebook.com/events/121898684951855"},
            {date: moment([2015,2,1]), title: "Proberaum, 73614 Schorndorf", link: "https://www.facebook.com/events/121898684951855"},
        ];
    var terminElement = $("#termine");
    $.each(termine, function(index, termin) {
        var dateClass="aktuell";
        if(moment().subtract(4, "week").isAfter(termin.date)) {
            dateClass="four_weeks";
        } else if(moment().subtract(1, "day").isAfter(termin.date)) {
            dateClass="one_day";
        }
        terminElement.append(`
        <div class="termin `+dateClass+`">
            <h3>`+termin.date.format("DD MMMM YY")+`</h3>
            <p>`+termin.title+`</p>
                <a href="`+termin.link+`"><div class="btn1">Infos</div></a>
            <div class="clearfix"></div>
            <div class="line"></div>
        </div>`);
    });
});

