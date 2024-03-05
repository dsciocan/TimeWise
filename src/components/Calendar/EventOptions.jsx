import React from "react";
import { Modal, Button } from "react-bootstrap";



export default function EventOptions(props) {
const eventList = JSON.parse(localStorage.getItem('events')) || [];

return (
<Modal size="sm" {...props}>          
        <Modal.Header closeButton>
          <Modal.Title>Event Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Would you like to delete this event?</p>
        <Button 
        onClick={props.button}
        > Delete </Button>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
)

}