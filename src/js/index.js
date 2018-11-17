import $ from "jquery";
import popper from "popper.js/dist/umd/popper";
import bootstrapMd from "bootstrap-material-design/dist/js/bootstrap-material-design";
import slick from "slick-carousel/slick/slick";
import fontawsome from "@fortawesome/fontawesome-free/js/all";
import jcf from "jcf/js/jcf";
import jcfSelect from "jcf/js/jcf.select";

window.FontAwesomeConfig = {
  searchPseudoElements: true
};

$(() => {
  $("body").bootstrapMaterialDesign();

  jcf.setOptions("Select", {
    wrapNative: false,
    wrapNativeOnMobile: false,
    useCustomScroll: true
  });
  jcf.replaceAll();

  // --- Add Or Remove Header Fixed Class ---
  function headerFix() {
    if ($(window).scrollTop() > 0) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  }
  headerFix();
  $(window).scroll(() => {
    headerFix();
  });
  // ----------------------------------------

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

});
