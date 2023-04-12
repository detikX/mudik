$(document).ready(function() {
        new WOW().init();
        // AOS.init({
        //     duration: 700,
        //   })


    })
    // $(window).on("load", function () {
    //   $(".preloader").fadeOut(10000);
    //   $(".preloader").remove();
    // });

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-trigger",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=4000",
        toggleActions: "play pause play reset"
    }
});

tl.from(".title", {
        opacity: 0,
        duration: 1
    })
    .from(
        "[data-slide='1'] .image88,[data-slide='1'] .slide-title, [data-slide='1'] .image-peta", {
            opacity: 0,
            duration: 1,
            scale: 0.75
        },
        "+=1"
    )
    .from(
        "[data-slide='1'] .text", {
            opacity: 0,
            duration: 1,
            stagger: 1
        },
        "+=1"
    )
    .to(
        "[data-slide='1'] .text, [data-slide='1'] .slide-title", {
            opacity: 0,
            duration: 1,
            stagger: 1
        },
        "+=10"
    )
    .to("[data-slide='1'] .image88, [data-slide='1'] .slide-title, [data-slide='1'] .image-peta", {
        opacity: 0,
        duration: 1
    })
    .from(
        "[data-slide='2'] .image88, [data-slide='2'] .slide-title, [data-slide='2'] .image-peta", {
            opacity: 0,
            duration: 1,
            scale: 0.75
        },
        "+=1"
    )
    .from(
        "[data-slide='2'] .text", {
            opacity: 0,
            duration: 1,
            stagger: 1
        },
        "+=1"
    )
    .to(
        "[data-slide='2'] .text", {
            opacity: 0,
            duration: 1,
            stagger: 1
        },
        "+=10"
    )
    .to("[data-slide='2'] .image88, [data-slide='2'] .slide-title, [data-slide='2'] .image-peta", {
        opacity: 0,
        duration: 1
    })
    .from(
        "[data-slide='3'] .image88, [data-slide='3'] .slide-title, [data-slide='3'] .image-peta", {
            opacity: 0,
            duration: 1,
            scale: 0.75
        },
        "+=1"
    )
    .from(
        "[data-slide='3'] .text", {
            opacity: 0,
            duration: 1,
            stagger: 1
        },
        "+=1"
    )
    .to(
        "[data-slide='3'] .text", {
            opacity: 0,
            duration: 1,
            stagger: 1
        },
        "+=10"
    )
    .to("[data-slide='3'] .image88, [data-slide='3'] .slide-title, [data-slide='3'] .image-peta", {
        opacity: 0,
        duration: 1
    });


$('.single-item').slick();

//kayak faq
$('.kategori-item').click(function(event) {
    var id = $(this).attr('id');
    var toShow = '#show-' + id;

    $('.dashboard-content').not(toShow).hide();
    $(toShow).fadeIn();
});

$(".to-peta").click(function() {
    $('html,body').animate({
            scrollTop: $(".mapsx").offset().top
        },
        600);
})