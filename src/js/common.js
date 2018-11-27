import $ from "jquery";
import popper from "popper.js/dist/umd/popper";
import bootstrapMd from "bootstrap-material-design/dist/js/bootstrap-material-design";
import fontawsome from "@fortawesome/fontawesome-free/js/all";
import slick from "slick-carousel/slick/slick";
import jcf from "jcf/js/jcf";
import jcfSelect from "jcf/js/jcf.select";

window.FontAwesomeConfig = {
  searchPseudoElements: true
};

// --- Add Or Remove Header Fixed Class ---
function headerFix() {
  if (
    window.location.pathname !== '/'
    || window.location.pathname === '/coach-profile.html'
    || window.location.pathname === '/coach-dashboard.html'
  ) {
    $("header").addClass("fixed");
  } else if($(window).scrollTop() > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
}
// --- Add Or Remove Header Fixed Class End ---

$(() => {
  $("body").bootstrapMaterialDesign();

  jcf.setOptions("Select", {
    wrapNative: false,
    wrapNativeOnMobile: false,
    useCustomScroll: true,
  });
  jcf.replaceAll();

  headerFix();
  $(window).scroll(headerFix);
  // ----------------------------------------

});
