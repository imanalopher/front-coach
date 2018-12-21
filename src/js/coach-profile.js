import airDatepicker from "air-datepicker/dist/js/datepicker";
import airDatepickerEn from "air-datepicker/dist/js/i18n/datepicker.en";
import stickySideBar from "sticky-sidebar";

$(() => {
  $("#booking-date").datepicker({
    language: "en",
    timeFormat: 'hh:ii aa',
    timepicker: true,
    minDate: new Date()
  });

  let coachBookForm = new StickySidebar("#book-form-handler", {
    containerSelector: "#coach-info",
    innerWrapperSelector: "#book-form-handler",
    topSpacing: 70,
    bottomSpacing: 20
  });
});
