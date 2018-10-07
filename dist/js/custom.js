$(function() {
    "use strict";

    $(".preloader").fadeOut();
    // ============================================================== 
    // sidebar-hover
    // ==============================================================

    $(".left-sidebar").hover(
        function() {
            $(".navbar-header").addClass("expand-logo");
        },
        function() {
            $(".navbar-header").removeClass("expand-logo");
        }
    );
    // this is for close icon when navigation open in mobile view
    $(".nav-toggler").on('click', function() {
        $("#main-wrapper").toggleClass("show-sidebar");
        $(".nav-toggler i").toggleClass("ti-menu");
    });
    $(".search-box a, .search-box .app-search .srh-btn").on('click', function() {
        $(".app-search").toggle(200);
        $(".app-search input").focus();
    });

    // ============================================================== 
    // Right sidebar options
    // ==============================================================
    $(function() {
        $(".service-panel-toggle").on('click', function() {
            $(".customizer").toggleClass('show-service-panel');

        });
        $('.page-wrapper').on('click', function() {
            $(".customizer").removeClass('show-service-panel');
        });
    });
    // ============================================================== 
    // This is for the floating labels
    // ============================================================== 
    $('.floating-labels .form-control').on('focus blur', function(e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // ============================================================== 
    //tooltip
    // ============================================================== 
    $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
        // ============================================================== 
        //Popover
        // ============================================================== 
    $(function() {
        $('[data-toggle="popover"]').popover()
    })

    // ============================================================== 
    // Perfact scrollbar
    // ============================================================== 
    $('.message-center, .customizer-body, .scrollable').perfectScrollbar({
        wheelPropagation: !0
    });

    /*var ps = new PerfectScrollbar('.message-body');
    var ps = new PerfectScrollbar('.notifications');
    var ps = new PerfectScrollbar('.scroll-sidebar');
    var ps = new PerfectScrollbar('.customizer-body');*/

    // ============================================================== 
    // Resize all elements
    // ============================================================== 
    $("body, .page-wrapper").trigger("resize");
    $(".page-wrapper").delay(20).show();

    // ============================================================== 
    // Collapsable cards
    // ==============================================================
    $('a[data-action="collapse"]').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
        $(this).closest('.card').children('.card-body').collapse('toggle');
    });
    // Toggle fullscreen
    $('a[data-action="expand"]').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
        $(this).closest('.card').toggleClass('card-fullscreen');
    });
    // Close Card
    $('a[data-action="close"]').on('click', function() {
        $(this).closest('.card').removeClass().slideUp('fast');
    });
    // ============================================================== 
    // LThis is for mega menu
    // ==============================================================
    $(document).on('click', '.mega-dropdown', function(e) {
        e.stopPropagation()
    });
    // ============================================================== 
    // Last month earning
    // ==============================================================
    var sparklineLogin = function() {
        $('.lastmonth').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '35',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#2961ff'
        });

    };
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();

    // ============================================================== 
    // This is for the innerleft sidebar
    // ==============================================================
    $(".show-left-part").on('click', function() {
        $('.left-part').toggleClass('show-panel');
        $('.show-left-part').toggleClass('ti-menu');
    });
});