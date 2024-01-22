import React from 'react';
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { v4 as uuid } from "uuid";





// adding views and changing size
function Calendars() {
    // adding event feature
    const [events, setEvents] = useState([]);
    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter, event name");
        if (eventNamePrompt) {
          setEvents([
            ...events,
            {
              start,
              end,
              title: eventNamePrompt,
              id: uuid(),
            },
          ]);
        }
      };
    return (
        <div id='full-calendar'>
            <FullCalendar 
            editable
            selectable
            events={events}
            select={handleSelect}
            plugins={[daygridPlugin, timeGridPlugin,interactionPlugin]}
             initialView='dayGridMonth'
             headerToolbar={{
                start:"today prev next",
                center:"title",
                end:"dayGridMonth, timeGridWeek, timeGridDay",
             }}
             
             height={650}
             aspectRatio={6}
             
            />
        </div>

        
    );
}



export default Calendars;




