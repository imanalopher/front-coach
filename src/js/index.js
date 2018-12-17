import slick from 'slick-carousel/slick/slick'

$(() => {
  // --- Coach Type Slick Slider ---
  $(".slick-coach-types").slick({
    dots: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
          variableWidth: true,
        }
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          variableWidth: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          variableWidth: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  });

  // --- Coach Type Slick Slider End ---

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
          slidesToScroll: 2,
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          variableWidth: true,
        }
      }
    ]
  });
  // --- Featured Coaches Slick Slider End ---

  // --- Testimonials Sliders ---
  $(".testimonials-slider").slick({
    arrows: false,
    autoplay: true,
  });

  $(".slider-btn.to-right").click(() => $(".testimonials-slider").slick('slickNext'));
  $(".slider-btn.to-left").click(() => $(".testimonials-slider").slick('slickPrev'));
  // --- Testimonials Sliders End ---

});
