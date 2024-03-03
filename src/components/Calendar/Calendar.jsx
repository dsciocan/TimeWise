import React from 'react';
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { setMonth, startOfDay } from 'date-fns';
import { FormLabel, InputGroup } from 'react-bootstrap';

import events from '../../events.json'
import { EventImpl } from '@fullcalendar/core/internal';



// adding views and changing size
function Calendars() {
    // adding event feature
    // const [eventList, setEventList] = useState();
    const [eventName, setEventName] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());;
    const [endDate, setEndDate] = useState(new Date());
    const handleShow = () => setModalShow(true)
    const handleClose = () => setModalShow(false);
    let eventList = JSON.parse(localStorage.getItem('events')) || []
    const handleSelect = () => {
          // setEvents([
          //   ...events,
          //   {
          //     start: startDate,
          //     end: endDate,
          //     title: eventName,
          //     id: uuid(),
          //   },
          // ]);
          eventList = JSON.parse(localStorage.getItem('events')) || []
          console.log(eventList)
          eventList.push( {
              start: startDate.toISOString().replace(/T.*$/, ''),
              end: endDate.toISOString().replace(/T.*$/, ''),
              startStr:startDate.toISOString(),
              endStr: endDate.toISOString(),
              title: eventName,
              id: uuid(),
          })
          localStorage.setItem('events', JSON.stringify(eventList))
          console.log(eventList)
          let modalBody = document.getElementById("modalBody")
        const saveText = document.createElement('div');
        saveText.textContent = "The event has been saved!"
        modalBody.append(saveText)
      };

      // const showEvents = () => {
      //   eventList = JSON.parse(localStorage.getItem('events')) || []
      //   return (eventList)
      // }

      // const dateValidation = (date) => {
      //   if(date < startDate) {
      //     setEndDate(startDate)
      //     return(<p>End Date cannot be set before Start Date</p>)
      //   } else {
      //     setEndDate(date)
      //   }
      // }
// useEffect(() => {
//   JSON.parse(localStorage.getItem('events'))
// }, eventList)

      const newEvent = () => {
        setModalShow(true)
      }

    return (
        <div id='full-calendar'>
            <FullCalendar 
            editable
            selectable
            events={eventList}
            navLinks={true}
            plugins={[daygridPlugin, timeGridPlugin,interactionPlugin]}
             initialView='dayGridMonth'
             headerToolbar={{
                start:"today prev next",
                center:"title addEventButton",
                end:"dayGridMonth, timeGridWeek, timeGridDay",

             }}
             customButtons= {{
              addEventButton: {
                text: 'New Event',
                click: newEvent}}}
            //  dateClick={handleShow}
             height={650}
             aspectRatio={6}
            
             
            />


<Modal show={modalShow} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>New Event</Modal.Title>
            </Modal.Header>
    
            <Modal.Body id='modalBody'>
            <InputGroup>
            <Form.Label htmlFor="newEvent">Event Name</Form.Label>
            <Form.Control
              type="event"
              id="newEvent"
              onChange={e => setEventName(e.target.value)} 
            />
            </InputGroup>

            <InputGroup>
            <FormLabel htmlFor="startDate">Start Date</FormLabel>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} timeInputLabel="Time:" dateFormat="MM/dd/yyyy hh:mm aa" showTimeInput/>
            </InputGroup>
            
            <InputGroup>
            <FormLabel htmlFor="endDate">End Date</FormLabel>
            <DatePicker selected={endDate} onChange={(date) => {
              if(date < startDate) {
                setEndDate(startDate)
              } else {
                setEndDate(date)
                }}} timeInputLabel="Time:" dateFormat="MM/dd/yyyy hh:mm aa" showTimeInput/>
            </InputGroup>
            {endDate == startDate ? <p>Note: End Date cannot be set before Start Date</p> : <p></p>}
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="primary" onClick={handleSelect}>Save</Button>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
        </div>

        
    );



            }
export default Calendars;




