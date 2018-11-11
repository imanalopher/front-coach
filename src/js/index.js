import $ from 'jquery';
import popper from 'popper.js/dist/umd/popper'
// import bootstrap from 'bootstrap/dist/js/bootstrap'
import bootstrapMd from 'bootstrap-material-design/dist/js/bootstrap-material-design'
import fontawsome from '@fortawesome/fontawesome-free/js/all.min.js';

$(() => {
  $("body").bootstrapMaterialDesign();

  function headerFix() {
    if ($(window).scrollTop() > 0) {
      $("header").addClass('fixed');
    }
    else {
      $("header").removeClass('fixed');
    }
  }

  headerFix();
  $(window).scroll(() => headerFix());
});
