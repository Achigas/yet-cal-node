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
      left: 'dayGridMonth,timeGridDay',
      center: 'prevYear,prev,title,next,nextYear',
      right:'legendButton,filterButton'
    },
    customButtons: {
      legendButton: {
          buttonText: "Legend",
          click: function() {
            legend.style.display = "inline-block";
          }
      },
      filterButton: {
        buttonText: "Filter",
        click: function() {
          console.log("filter clicked!")
        }
      }
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
        start: '2021-03-09T16:00:00',
        borderColor: "#955DAA"
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-03-16T16:00:00',
        borderColor: "#955DAA"
      },
      {
        title: 'Conference',
        start: '2021-03-11',
        end: '2021-03-13'
      },
      {
        title: 'Meeting',
        start: '2021-03-12T10:30:00',
        end: '2021-03-12T12:30:00',
        backgroundColor: "#4d7cb2",
        borderColor: "#4d7cb2",
        textColor: "blue"
      },
      {
        title: 'Lunch',
        start: '2021-03-12T12:00:00',
        borderColor: "#E0AB62",
      },
      {
        title: 'Meeting',
        start: '2021-03-12T14:30:00',
        borderColor: "#77B295",
      },
      {
        title: 'Birthday Party',
        start: '2021-03-13T07:00:00',
        borderColor: "#955DAA"
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

var legend = document.getElementById("legend")
var legendButton = document.getElementById("legendButton")

function displayLegend () {
  var legend = document.getElementById("legend")
  if (legend.style.display === "none") {
    console.log("yay!")
    legend.style.display="inline-block";
  }
  else {
    legend.style.display="none"
  }
}


// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, note open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }