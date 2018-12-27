import $ from "jquery";
import popper from "popper.js/dist/umd/popper";
import bootstrapMd from "bootstrap-material-design/dist/js/bootstrap-material-design";
import fontawsome from "@fortawesome/fontawesome-free/js/all";
import jcf from "jcf/js/jcf";
import jcfSelect from "jcf/js/jcf.select";

window.FontAwesomeConfig = {
  searchPseudoElements: true
};

// --- Add Or Remove Header Fixed Class ---
function headerFix() {
  if (window.location.pathname != "/") {
    $("header").addClass("fixed");
  } else if ($(window).scrollTop() > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
}

$(() => {
  $("body").bootstrapMaterialDesign();

  jcf.setOptions("Select", {
    wrapNative: false,
    wrapNativeOnMobile: false,
    useCustomScroll: true
  });
  jcf.replaceAll();

  headerFix();
  $(window).scroll(() => {
    headerFix();
  });

  $("#nav-bar-tgl").click((e) => {
    $(e.currentTarget).find('.tgl-icon').toggleClass("on");
    $('nav.main-nav').toggleClass("on");
  });
  // ----------------------------------------

  $("#dashboard-nav-tgl").click((e) => {
    $(e.currentTarget).find(".tab-tgl-icon").toggleClass('on');
    $(e.currentTarget).parent().find("ul").slideToggle();
  });
});
