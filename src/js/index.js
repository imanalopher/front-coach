import slick from "slick-carousel/slick/slick";
// require("/js/common.js");
// function coachListMap() {
//   let windowScroll = $(window).scrollTop() + $("header.fixed").outerHeight();
//   let mapScroll = $("#coach-list-map-wrap").offset().top;
//   console.log(windowScroll, mapScroll);
//   if (windowScroll >= mapScroll) {
//     $("#coach-list-map-wrap").addClass("fixed");
//     $("#coach-list-map-wrap").css("top", $("header.fixed").outerHeight());
//     console.log("true");
//   } else {
//     $("#coach-list-map-wrap").css("top", "auto");
//     $("#coach-list-map-wrap").removeClass("fixed");
//     console.log("false");
//   }
// }

$(() => {
  // coachListMap();

  // $(window).scroll(() => {
  //   // coachListMap();
  // });
  // ----------------------------------------

  // --- Coach Type Slick Slider ---
  $(".slick-coach-types").slick({
    dots: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
    ]
  });
  // ----------------------------------------

  // --- Featured Coaches Slick Slider ---
  $(".slick-featured-coaches").slick({
    dots: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });
  // ----------------------------------------
});
