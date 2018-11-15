import $ from "jquery";

import fontawsome from "@fortawesome/fontawesome-free/js/all";
import jcf from "jcf/js/jcf";
import jcfSelect from "jcf/js/jcf.select";

$(() => {

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
});
