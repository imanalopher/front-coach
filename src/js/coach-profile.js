import airDatepicker from "air-datepicker/dist/js/datepicker";
import airDatepickerEn from "air-datepicker/dist/js/i18n/datepicker.en";
import stickySideBar from "sticky-sidebar";
import fullCalendar from "fullcalendar/dist/fullcalendar.min";

$(() => {
  $("#booking-date").datepicker({
    language: "en",
    timeFormat: 'hh:mm:ii',
    timepicker: true,
    minDate: new Date(),
    toggleSelected: true
  });

  $("#coach-profile-full-calendar").fullCalendar();

  let coachBookForm = new StickySidebar("#book-form-handler", {
    containerSelector: "#coach-info",
    innerWrapperSelector: "#book-form-handler",
    topSpacing: 70,
    bottomSpacing: 20
  });
});
