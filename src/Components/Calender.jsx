import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // For day grid view
import timeGridPlugin from '@fullcalendar/timegrid'; // For time grid views
import interactionPlugin from "@fullcalendar/interaction"; // For clickable dates and events
import listPlugin from '@fullcalendar/list'; // For list view


const availabilities = [
  {
    "professional_id": 1,
    "start_time": "2024-03-20T09:00:00Z",
    "end_time": "2024-03-20T10:00:00Z",
    "is_booked": false
  },
  {
    "professional_id": 1,
    "start_time": "2024-03-20T10:00:00Z",
    "end_time": "2024-03-20T11:00:00Z",
    "is_booked": false
  },
  {
    "professional_id": 2,
    "start_time": "2024-03-21T13:00:00Z",
    "end_time": "2024-03-21T14:00:00Z",
    "is_booked": false
  },
  {
    "professional_id": 2,
    "start_time": "2024-03-21T14:00:00Z",
    "end_time": "2024-03-21T15:00:00Z",
    "is_booked": false
  },
  {
    "professional_id": 3,
    "start_time": "2024-03-22T15:00:00Z",
    "end_time": "2024-03-22T16:00:00Z",
    "is_booked": false
  }
]

export default function Calendar() {
  
  const handleDateClick = (arg) => {
    alert('Date clicked: ' + arg.dateStr);
  };

  
  const handleEventClick = (clickInfo) => {
    alert('Event clicked: ' + clickInfo.event.title);
  };

  
  const addEvent = (event) => {
    
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }}
      initialView='dayGridMonth'
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      select={handleDateClick} 
      events={[
       
        { title: 'Event 1', start: new Date().toISOString(), end: new Date().toISOString() }
        
      ]}
      eventClick={handleEventClick}
    />
  );
}
