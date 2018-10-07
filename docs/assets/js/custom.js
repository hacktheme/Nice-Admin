$(function() {
    $('#carousel1').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    });
    $('#testi').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    });
    $('a.nav-link, .dm-btn').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 10
        }, 1000);
        event.preventDefault();
    });
});