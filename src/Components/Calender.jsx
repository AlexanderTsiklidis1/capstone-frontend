import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // For day grid view
import timeGridPlugin from '@fullcalendar/timegrid'; // For time grid views
import interactionPlugin from "@fullcalendar/interaction"; // For clickable dates and events
import listPlugin from '@fullcalendar/list'; // For list view

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
