import React from 'react';
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'


function Calendars() {
    return (
        <div>
            <FullCalendar plugins={[daygridPlugin]} />
        </div>
    )
}

export default Calendars;





