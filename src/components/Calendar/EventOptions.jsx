import React from "react";
import { Modal} from "react-bootstrap";
import { Button } from "@mui/material";
import "./Options.css"


export default function EventOptions(props) {
const eventList = JSON.parse(localStorage.getItem('events')) || [];

return (
<Modal {...props}>          
        <Modal.Header closeButton>
          <Modal.Title className="title">{props.name} - Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="text-center">Would you like to delete this event?</p>
        <div  className="d-flex justify-content-center">
        <Button className="delete-button"
        variant="contained" type="submit"
        onClick={props.button}
        > Delete </Button>
        </div>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="outlined" type="submit" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
)

}