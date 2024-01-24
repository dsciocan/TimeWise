import {React, useState, useEffect, useContext} from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Table } from "react-bootstrap";
import { BreakContext } from "./Timer";
import "./saved-sessions.css"


function SavedSessions() {

// const [displaySessions, setDisplaySessions] = useState([ ])
const study = useContext(BreakContext)
const displaySessions = []

// useEffect(() => {
        const savedSessions = JSON.parse(localStorage.getItem('savedSessions'))
        console.log(savedSessions)
        //  setDisplaySessions(savedSessions.map(el => {
        //     <li>Number: {el.id}       Sessions: {el.sessions}        Summary: {el.name}</li>
        if(savedSessions != null) { 
        savedSessions.forEach((el) => {
          displaySessions.push(
              <tr>
                <td>{el.id}</td>
                <td>{el.sessions}</td>
                <td>{el.name}</td>
              </tr>

            // <li className="history-items">{el.id}.      Sessions:     |    Summary: </li>
          )

})
        }
// }, [study])

console.log(displaySessions)

    return(
        <Accordion>
        <Accordion.Item eventKey="1" class="history">
          <Accordion.Header><h4 className="history-text">Previous Sessions</h4></Accordion.Header>
          <Accordion.Body>
          <Table bordered className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Number of sessions</th>
                <th>Summary</th>
              </tr>
            </thead>
            <tbody>
            {displaySessions}
            </tbody>
          </Table>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    )
}

export default SavedSessions