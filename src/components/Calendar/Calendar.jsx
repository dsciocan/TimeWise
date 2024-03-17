import React from 'react';
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid"
import "./Calendar.css"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { setMonth, startOfDay } from 'date-fns';
import { FormLabel, InputGroup } from 'react-bootstrap';

import events from '../../events.json'
import { EventImpl } from '@fullcalendar/core/internal';

import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import EventOptions from './EventOptions';

// adding views and changing size
function Calendars() {
    // adding event feature
    const [eventName, setEventName] = useState();
    const [currentEvent, setCurrentEvent] = useState()
    const [modalShow, setModalShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());;
    const [endDate, setEndDate] = useState(new Date());
    const [delShow, setDelShow] = useState(false)
    const [baseEvent, setBaseEvent] = useState()
    const [eventId, setEventId] = useState()
    const handleShow = () => setModalShow(true)
    const handleClose = () => setModalShow(false);
    let eventList = JSON.parse(localStorage.getItem('events')) || []
    const handleSelect = () => {
          eventList = JSON.parse(localStorage.getItem('events')) || []
          console.log(eventList)
          eventList.push( {
              start: startDate,
              end: endDate,
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

      const newEvent = () => {
        setModalShow(true)
      }

      (info) => {
        console.log(info)

}

      const handleEventDelete = (info, id) => {
        if(info) {
        info.remove();
        eventList = JSON.parse(localStorage.getItem('events')) || [];
        const newEventList = eventList.filter((entry) => entry.id != id)
        console.log(newEventList)
        localStorage.setItem('events', JSON.stringify(newEventList))
      }
    }

    return (
      <>
        <div id='full-calendar'>
            <FullCalendar 
            // editable
            selectable
            events={eventList}
            eventClick={(info) => {
              setBaseEvent(info.event)
              setEventId(info.event._def.publicId)
              setCurrentEvent(info.event._def.title)
              setDelShow(true)
            }}
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
             height={650}
             aspectRatio={6}
            
             
            />

        <Modal show={modalShow} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title id="modal-title">New Event</Modal.Title>
            </Modal.Header>
    
            <Modal.Body id='modalBody'>
            <InputGroup className='ig'>
            <Form.Label className='form-label' htmlFor="newEvent">Event Name</Form.Label>
            <Form.Control
              type="event"
              id="newEvent"
              onChange={e => setEventName(e.target.value)} 
            />
            </InputGroup>

            <InputGroup className='ig'>
            <Form.Label htmlFor="startDate" className='form-label'>Start Date</Form.Label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} timeInputLabel="Time:" dateFormat="MM/dd/yyyy hh:mm aa" showTimeInput/>
            </InputGroup>
            
            <InputGroup className='ig'>
            <Form.Label className='form-label' htmlFor="endDate">End Date</Form.Label>
            <DatePicker selected={endDate} onChange={(date) => {
              if(date < startDate) {
                setEndDate(startDate)
              } else {
                setEndDate(date)
                }}} timeInputLabel="Time:" dateFormat="MM/dd/yyyy hh:mm aa" showTimeInput/>
            </InputGroup>
            {endDate <= startDate ? <p>Note: End Date cannot be set before Start Date</p> : <p></p>}
            </Modal.Body>
    
            <Modal.Footer>
              <Button className='modal-button' variant="contained" onClick={handleSelect}>Save</Button>
              <Button variant="outlined" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
        </div>

        <div>
          <EventOptions show={delShow} onHide={() => setDelShow(false)} button={(e) => {
            e.stopPropagation();
            handleEventDelete(baseEvent, eventId)
          }} name={currentEvent}/>
        </div>
    </>

        
    );



            }
export default Calendars;




