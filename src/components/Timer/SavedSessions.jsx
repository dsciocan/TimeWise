import {React, useState, useEffect, useContext} from "react";
import Accordion from 'react-bootstrap/Accordion';

import { BreakContext } from "./Timer";



function SavedSessions() {

const [displaySessions, setDisplaySessions] = useState([])
const study = useContext(BreakContext)

useEffect(() => {
        const savedSessions = JSON.parse(localStorage.getItem('savedSessions'))
         setDisplaySessions(savedSessions.map(el => {
            <li>Number: {el.id}       Sessions: {el.sessions}        Summary: {el.name}</li>
}))
}, [study])

    return(
        <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Previous Sessions</Accordion.Header>
          <Accordion.Body>
            <ul>
                {displaySessions}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    )
}

export default SavedSessions