// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2021-03-07',
    headerToolbar: {
      left: 'dayGridMonth, timeGridDay',
      center: 'prevYear, prev, title, next, nextYear',
      right:'dayGridMonth, timeGridDay'
    },
    dayHeaderFormat: { weekday: "long" }, 
    events: [
      {
        title: 'All Day Event',
        start: '2021-03-01'
      },
      {
        title: 'Long Event',
        start: '2021-03-07',
        end: '2021-03-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-03-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-03-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2021-03-11',
        end: '2021-03-13'
      },
      {
        title: 'Meeting',
        start: '2021-03-12T10:30:00',
        end: '2021-03-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2021-03-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2021-03-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2021-03-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-03-28'
      }
    ]
  });

  calendar.render();
});