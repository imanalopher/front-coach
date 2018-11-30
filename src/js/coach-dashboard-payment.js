import $ from "jquery";
import popper from "popper.js/dist/umd/popper";
import airDatepicker from "air-datepicker/dist/js/datepicker";
import airDatepickerEn from "air-datepicker/dist/js/i18n/datepicker.en";
import mdt from "bootstrap-material-design";

$(() => {

  $('#coach-birthday').datepicker({
    language: 'en'
  });

});
console.log("hello");
