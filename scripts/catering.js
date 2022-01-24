// $(document).ready(function(){
//     $.fn.isInViewport = function() {
//         var elementTop = $('.navbar').offset().top;
//         var elementBottom = elementTop + $('.navbar').outerHeight();
//
//         var viewportTop = $(window).scrollTop();
//         var viewportBottom = viewportTop + $(window).height();
//
//         return elementBottom > viewportTop && elementTop < viewportBottom;
//     };
//
//     $(window).on('resize scroll', function() {
//         if ($('.navbar').isInViewport()) {
//             $( "div.navbar-2" ).addClass( "hide" )
//         } else {
//             $( "div" ).removeClass( "hide" )
//         }
//     });
// });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("link-container");
    if (x.className === "link-container") {
        x.className += " responsive";
    } else {
        x.className = "link-container";
    }

    var y = document.getElementById("overlay-wrapper");
    if (y.className === "overlay-wrapper") {
        y.className += " show";
    } else {
        y.className = "overlay-wrapper";
    }
}


$(document).ready(function(){
    $.fn.isInViewport = function() {
        var elementTop = $('.navbar').offset().top;
        var elementBottom = elementTop + $('.navbar').outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        if ($('.navbar').isInViewport()) {
            $( "div.navbar-2" ).addClass( "hide" )
            $( ".icon" ).removeClass( "fixed-2" )
        } else {
            $( "div" ).removeClass( "hide" )
            $( ".icon" ).addClass( "fixed-2" )
        }
    });

    $("a.on-click").click(function(){
        $(".link-container").removeClass("responsive");
        $(".overlay-wrapper").removeClass("show");
    });
});