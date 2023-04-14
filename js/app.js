$(document).ready(function () {
    new WOW().init();
    // AOS.init({
    //     duration: 700,
    //   })


})
// $(window).on("load", function () {
//   $(".preloader").fadeOut(10000);
//   $(".preloader").remove();
// });

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".scroll-trigger",
//         pin: true,
//         scrub: 1,
//         start: "top top",
//         end: "+=4000",
//         toggleActions: "play pause play reset"
//     }
// });

// tl.from(".title", {
//         opacity: 0,
//         duration: 1
//     })
//     .from(
//         "[data-slide='1'] .image88,[data-slide='1'] .slide-title, [data-slide='1'] .image-peta", {
//             opacity: 0,
//             duration: 1,
//             scale: 0.75
//         },
//         "+=1"
//     )
//     .from(
//         "[data-slide='1'] .text", {
//             opacity: 0,
//             duration: 1,
//             stagger: 1
//         },
//         "+=1"
//     )
//     .to(
//         "[data-slide='1'] .text, [data-slide='1'] .slide-title", {
//             opacity: 0,
//             duration: 1,
//             stagger: 1
//         },
//         "+=10"
//     )
//     .to("[data-slide='1'] .image88, [data-slide='1'] .slide-title, [data-slide='1'] .image-peta", {
//         opacity: 0,
//         duration: 1
//     })
//     .from(
//         "[data-slide='2'] .image88, [data-slide='2'] .slide-title, [data-slide='2'] .image-peta", {
//             opacity: 0,
//             duration: 1,
//             scale: 0.75
//         },
//         "+=1"
//     )
//     .from(
//         "[data-slide='2'] .text", {
//             opacity: 0,
//             duration: 1,
//             stagger: 1
//         },
//         "+=1"
//     )
//     .to(
//         "[data-slide='2'] .text", {
//             opacity: 0,
//             duration: 1,
//             stagger: 1
//         },
//         "+=10"
//     )
//     .to("[data-slide='2'] .image88, [data-slide='2'] .slide-title, [data-slide='2'] .image-peta", {
//         opacity: 0,
//         duration: 1
//     })
//     .from(
//         "[data-slide='3'] .image88, [data-slide='3'] .slide-title, [data-slide='3'] .image-peta", {
//             opacity: 0,
//             duration: 1,
//             scale: 0.75
//         },
//         "+=1"
//     )
//     .from(
//         "[data-slide='3'] .text", {
//             opacity: 0,
//             duration: 1,
//             stagger: 1
//         },
//         "+=1"
//     )
//     .to(
//         "[data-slide='3'] .text", {
//             opacity: 0,
//             duration: 1,
//             stagger: 1
//         },
//         "+=10"
//     )
//     .to("[data-slide='3'] .image88, [data-slide='3'] .slide-title, [data-slide='3'] .image-peta", {
//         opacity: 0,
//         duration: 1
//     });


$('.single-item').slick();

//kayak faq
$('.kategori-item').click(function (event) {
    var id = $(this).attr('data-id');
    var toShow = '.show-' + id;

    $('.dashboard-content').not(toShow).hide();
    $(toShow).fadeIn();
});

$('.kategori-itemx').click(function (event) {
    var id = $(this).attr('data-id');
    var toShow = '.showx-' + id;

    $('.dashboard-contentx').not(toShow).hide();
    $(toShow).fadeIn();
});


$("#baru-jawa-table").hide()
$("#fungsi-jawa-table").hide()
//     // $("#biru-jawa").hide();
$("#biru-jawa-angka").hide();
$("#kuning-jawa-angka").hide();
// $("#kuning-jawa").hide();
// $("#baru-jawa").click(function() {
//     $("#baru-jawa-table").fadeToggle();
//     // $("#biru-jawa").fadeToggle();
//     $("#biru-jawa-angka").fadeToggle('200');

//     // setTimeout(function() {
//     //     $('html, body').animate({
//     //         scrollTop: $("#baru-jawa-table").offset().top
//     //     }, 2000);
//     // }, 2000)

// })
// $("#fungsi-jawa").click(function() {
//     $("#fungsi-jawa-table").fadeToggle();
//     // $("#kuning-jawa").fadeToggle();
//     $("#kuning-jawa-angka").fadeToggle();
//     // setTimeout(function() {
//     //     $('html, body').animate({
//     //         scrollTop: $("#fungsi-jawa-table").offset().top
//     //     }, 2000);
//     // }, 2000)
// })


$("#sumut-no-kuning").hide()
$("#sumut-no-biru").hide()
$("#sumut-table-baru").hide();
$("#sumut-table-fungsi").hide();
// $("#sumut-no-kuning").hide()
// $("#sumut-no-biru").hide()
// $("#sumut-baru").click(function() {
//         $("#baru-jawa-table").fadeToggle();
//         // $("#sumut-garis-biru").fadeToggle();
//         $("#sumut-no-biru").fadeToggle('200');

//         // setTimeout(function() {
//         //     $('html, body').animate({
//         //         scrollTop: $("#baru-jawa-table").offset().top
//         //     }, 2000);
//         // }, 2000)

//     })
//     // $("#sumut-table").hide()
// $("#sumut-fungsi").click(function() {
//     $("#fungsi-sumut-table").fadeToggle();
//     // $("#sumut-garis-kuning").fadeToggle();
//     $("#sumut-no-kuning").fadeToggle('200'); // setTimeout(function() {
//     //     $('html, body').animate({
//     //         scrollTop: $("#fungsi-jawa-table").offset().top
//     //     }, 2000);
//     // }, 2000)
// })



$(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 1);
        }
    }

    $(".count").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('1800');
        $(this).data("isCounting", false);
    });

    function startCount() {
        $(".count").each(function () {
            count($(this));
        });
    };
    $(window).scroll(function () {
        startCount();
    });
});