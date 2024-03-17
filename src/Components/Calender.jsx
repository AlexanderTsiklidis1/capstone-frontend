import React from 'react';
import FullCalendar from '@fullcalendar/react'; // Main component
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin for day grid view

const Calendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'Event 1', date: '2024-03-17' },
          // Add more events here
        ]}
      />
    </div>
  );
};

export default Calendar;