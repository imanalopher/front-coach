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

  // $("#coach-profile-full-calendar").fullCalendar({
  //   defaultView: 'basicWeek',
  //   header: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'week,agendaWeek,agendaMonth,agendaDay'
  //   },
  // });

  $('#coach-profile-full-calendar').fullCalendar({
    defaultView: 'agendaWeek',
    events: [
      {
        "title":"John Bobby",
        "start":"2018-11-29T06:30:00",
        "end":"2018-11-29T10:00:00"
      },
      {
        "title":"John Bobby",
        "start":"2018-11-29T10:30:00",
        "end":"2018-11-29T13:30:00"
      },
      {
        "title":"Jim Kerry",
        "start":"2018-11-29T15:30:00",
        "end":"2018-11-29T19:30:00"
      },
    ],
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
      const title = prompt("Event title:");
      if (title) {
        let eventData = { title, start, end };
        $('#coach-profile-full-calendar').fullCalendar('renderEvent', eventData, true);
      }
      $('#coach-profile-full-calendar').fullCalendar('unselect');
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    navLinks: true,
    header: {
      left: 'prev',
      center: 'title',
      right: 'next, agendaWeek, agendaDay'
    },
    firstDay: 0,
    views: {
      month: {
        titleFormat: 'MMMM - YYYY'
      }
    },
  });

  let coachBookForm = new StickySidebar("#book-form-handler", {
    containerSelector: "#coach-info",
    innerWrapperSelector: "#book-form-handler",
    topSpacing: 70,
    bottomSpacing: 20
  });
});
