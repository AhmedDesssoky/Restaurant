
$(document).ready(function(){

    new WOW().init();


    $("#loding").fadeOut(2000, function () {

        $("body").css("overflow", "auto")
    });


    $('.slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,


    });

    $('.multiple-items').slick({
        autoplay: true,

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    let aboutOffsetTop = $("#about").offset().top;
    $(window).scroll(function () {


        let wScroll = $(window).scrollTop();
        if (wScroll > aboutOffsetTop - 450) {


            $("#topbar").css("display", "none");
            $(".navbar").css("top", "0");
            $(".navbar").css("backgroundColor", "rgba(0, 0, 0, 0.85)");
            $(".navbar").css("borderBottom", "1px solid #37332a");
            $(".back-to-top").fadeIn(500)




        }
        else {


            $("#topbar").css("display", "flex");
            $(".navbar").css("top", "40px");
            $(".navbar").css("backgroundColor", "rgba(12, 11, 9, 0.6)");
            $(".navbar").css("borderBottom", " 1px solid rgba(12, 11, 9, 0.6)");
            $(".back-to-top").fadeOut(500)


        }
    })

    $(".back-to-top").click(function () {

        $("html , body").animate({ scrollTop: 0 }, 2500)
    })

    $(".navbar-nav  a[href^='#']").click(function () {
        let aHref = $(this).attr("href");
        let sectionOffset = $(aHref).offset().top;
        $("html , body").animate({ scrollTop: sectionOffset }, 2000)


    })


})