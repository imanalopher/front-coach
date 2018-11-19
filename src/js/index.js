import slick from 'slick-carousel/slick/slick'

$(() => {
  // --- Coach Type Slick Slider ---
  $(".slick-coach-types").slick({
    dots: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true
  });

  // --- Coach Type Slick Slider End ---

  // --- Featured Coaches Slick Slider ---
  $(".slick-featured-coaches").slick({
    dots: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true
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
