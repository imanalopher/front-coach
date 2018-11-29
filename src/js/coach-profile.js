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

  jQuery('#coach-profile-full-calendar').each(function() {
    var e = jQuery(this)
      , events = [
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
    ]
      , s = e.data('lang');
    e.fullCalendar({
      defaultView: 'agendaWeek',
      events: events,
      editable: true,
      header: {
        left: 'prev',
        center: 'title',
        right: 'next, agendaWeek, agendaDay'
      },
      lang: s,
      firstDay: 0,
      views: {
        month: {
          titleFormat: 'MMMM - YYYY'
        }
      },
      loading: function(e) {
        var o = jQuery(this)
          , n = o.find('.fc-center h2');
        if (!e) {
          var t = n.html()
            , s = '';
          t = t.split(' ');
          for (var i = 0; i < t.length; i++) {
            if (i !== 2) {
              s = s + t[i] + ' '
            } else {
              s = s + ' <span>' + t[i] + '</span> '
            }
          }
          ;n.html(s)
        }
      }
    })
  });

  let coachBookForm = new StickySidebar("#book-form-handler", {
    containerSelector: "#coach-info",
    innerWrapperSelector: "#book-form-handler",
    topSpacing: 70,
    bottomSpacing: 20
  });
});
