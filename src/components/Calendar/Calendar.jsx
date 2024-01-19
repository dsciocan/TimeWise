import React from 'react';
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

//adding views
function Calendars() {
    return (
        <div>
            <FullCalendar 
            plugins={[daygridPlugin, timeGridPlugin,interactionPlugin]}
             initialView={'dayGridMonth'}
             headerToolbar={{
                start:"today prev next",
                center:"title",
                end:"dayGridMonth, timeGridWeek, timeGridDay",
                
             }}
                />
        </div>
    );
}



export default Calendars;




