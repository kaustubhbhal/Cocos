/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("link-container");
    if (x.className === "link-container") {
        x.className += " responsive";
    } else {
        x.className = "link-container";
    }

    var y = document.getElementById("overlay-wrapper");
    if (y.className === "overlay-wrapper-2") {
        y.className += " show";
    } else {
        y.className = "overlay-wrapper-2";
    }
}

function scroll_about(){
    var element = document.getElementById("home-about");
    element.scrollIntoView({block: 'center', behavior:'smooth'});
}

$(document).ready(function(){
    $("img.event-1-img").on("click", function (event) {
        $("div.embed-container").append("<script src=\"https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js\" async></script>\n" +
            "<div class=\"pa-gallery-player-widget\" style=display:none;\"\n" +
            "  data-link=\"https://photos.app.goo.gl/K5FzyTVRRYXS1uom9\"\n" +
            "  data-title=\"Cheesecake\"\n" +
            "  data-description=\"3 new photos added to shared album\">\n>" +
            "  <object data=\"https://lh3.googleusercontent.com/BVFKbo6BnZXZIfxVaxnMCVcnX8RVLM31r-SzP9XA2Xxe0O1ce0yoyrTZYWxSSTuQgRNqS2JshQYHThUuWv1GMNrYb7tck3W9tcyk4ja1f9rb1Uf-4WdMIayQnfEpdlmPkF6uQo3L=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/Q_NZ2kti8pz8fn2uYYWF9yhihj4ArICa7Oo-P8jjQkb5pVC_B9z_qLajNq2RNHc40DTeXOYpLgQ4F-a5lrd1vFYVstvvzZ2CxLdYbW9ZgXjulZeEWkwL8Weiszq0AdvrplIdnjfI=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/DV7taETULf1e-tgnUAkyV0N6eAnnl07Jog1npdIMXmxcVdCPXpfkpM1w7XRwQczb1X6Ihn0A0GIEZk-ul-xB8Zkv6iqx_ggEUQ7svmgqH8C4-2C_r_h-QbBBJOpFmnuM8H4oNoCm=w1920-h1080\"></object>\n" +
            "</div>\n");
        $("div.overlay-wrapper").show();
    });

    $("img.event-2-img").on("click", function (event) {
        $("div.embed-container").append("<script src=\"https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js\" async></script>\n" +
            "<div class=\"pa-gallery-player-widget\" style= display:none;\"\n" +
            "  data-link=\"https://photos.app.goo.gl/GXpkoteWWMSxuwmMA\"\n" +
            "  data-title=\"Cookies\"\n" +
            "  data-description=\"3 new photos added to shared album\">\n" +
            "  <object data=\"https://lh3.googleusercontent.com/34P5fbMuD6ii9Hl1id-SjnMpQxFWWisGKxDDvP0d0-gQ9B82PCLw1_tn88MRsYVKUOIhDEMBOnm8jV6Rug6ZADRwVaQdw-pO3wZ4V3CQ6H9duePucKOwnl7xXyRMbfgGKkeFai7y=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/nTBkXmItYg6DqbuYp57PMRhMGB5-VqAYtEcyKCCJC3kWwz9t2AHeXXu7iSzQM1Kcd-vDmeu8NwaEBcP5j85bUaqqcHMNWel6c4uGKgDGqcqGai6uNZEPaTlMnLBFSkIHiTEDlY_T=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/zg5n9xnKoQyshD5mTic6NGJyhOK8SekKP--GTbJJTA3uNc15W4GWQIrcTB8_YyerrlZrWOTW6f4rBWp_BbNdqK7JB0yGgPGF4lSOqqFO7BF_o5_BSLJepb9AkB_-Ri2NyqTQPHxe=w1920-h1080\"></object>\n" +
            "</div>\n");
        $("div.overlay-wrapper").show();
    });


    $("img.event-3-img").on("click", function (event) {
        $("div.embed-container").append("<script src=\"https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js\" async></script>\n" +
            "<div class=\"pa-gallery-player-widget\" style=display:none;\"\n" +
            "  data-link=\"https://photos.app.goo.gl/41iQ6ZAUcuPTNTzG8\"\n" +
            "  data-title=\"Cupcakes\"\n" +
            "  data-description=\"3 new photos added to shared album\">\n" +
            "  <object data=\"https://lh3.googleusercontent.com/Myl1CZi7nbqfu2roy8lhhKEWay_6H-P45_12qGHlniPT3pi91VzToJJeUkXYSbyQMma85Wcrt5y_XUWPKhMbItm6qg7T3LKtJTupVZhOi7zHhPxuyGP0ref-H_1Ie_iYT-9ARNmu=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/B2tuYPSNnIL98Xoub4XmsY78qtPgE9YsfY9K8lUgdJ0cg2ty5NtyqllWvZc3X1rHarrDA7MvxhCR8HfJN4R4RaYS4DHk1aYXt_JnOsI0zVo-DATTQejCp1hARVezz5FDt_Q07Dwe=w1920-h1080\"></object>\n" +
            " <object data=\"https://lh3.googleusercontent.com/oL6ZxUzVknT5qXLnHiCY8_aOj2udNcSV9aZcyqd6OHWj1omXEwn9fTIScRlx0SAZmNFzzIwOQcesPPrektxDOi9xyWjE7u_jXYUiL8PUSkrjOVFH5NuR1pRZBR5BUbsml7uqa0LD=w1920-h1080\"></object>\n" +
            "</div>\n");
        $("div.overlay-wrapper").show();
    });

    $("img.close").on("click", function () {
        $("div.pa-gallery-player-widget").remove();
        $("div.overlay-wrapper").hide();
    });

    // $.fn.isInViewport = function() {
    //     var elementTop = $('.navbar').offset().top;
    //     var elementBottom = elementTop + $('.navbar').outerHeight();
    //
    //     var viewportTop = $(window).scrollTop();
    //     var viewportBottom = viewportTop + $(window).height();
    //
    //     return elementBottom > viewportTop && elementTop < viewportBottom;
    // };
    //
    // $(window).on('resize scroll', function() {
    //     if ($('.navbar').isInViewport()) {
    //         $( "div.navbar-2" ).addClass( "hide" )
    //     } else {
    //         $( "div" ).removeClass( "hide" )
    //     }
    // });

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