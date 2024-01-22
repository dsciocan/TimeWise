import { React, useState, useEffect, createContext, useContext} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import { set } from "date-fns";
import { BreakContext, MinutesContext } from "./Timer";


function Settings(props) {
    const [ workValue, setWorkValue ] = useState(25);
    const [ breakValue, setBreakValue] = useState(5);
    const [ sessionNo, setSessionNo ] = useState(1);
    const [longBreak, setLongBreak] = useState(false);
    const [ minutes, setMinutes] = useContext(MinutesContext)
    const focusMode = useContext(BreakContext)


    useEffect(() => {
        if(sessionNo == 4) {
            setLongBreak(true)
        } else {
            setLongBreak(false)
        }
    }, [sessionNo])
    
    const changeMinutes = (e) => {
        e.preventDefault()
        setMinutes(workValue)
    }

    useEffect(() => {
        if(focusMode) {
            setMinutes(workValue)
        } else if (longBreak) {
            setMinutes(15)
        } else {
            setMinutes(breakValue)
        }
}, [focusMode])

    //carry variables for work time, break time and no to timer component and update timer based on input

  return (

    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Timer Settings
        </Modal.Title>
      </Modal.Header>
      <Form  onSubmit={changeMinutes}>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col>
                <Form.Label>Session Name/Summary</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
            <Form.Label>Work Session Time (minutes)</Form.Label>
            <RangeSlider min={20} max={30} value={workValue}  onChange={e => setWorkValue(e.target.value)} tooltip='auto'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
            <Form.Label>Break Time (minutes)</Form.Label>
            <RangeSlider min={3} max={7} value={breakValue}  onChange={e => setBreakValue(e.target.value)} tooltip='auto'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
            <Form.Label>Number of Sessions</Form.Label>
            <RangeSlider min={1} max={4} value={sessionNo}  onChange={e => setSessionNo(e.target.value)} tooltip='auto'/>
            </Col>
            <Col xs={12} md={4}>
                {longBreak ? <p>15 minute break included</p> : <p></p>}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit" onClick={props.onHide}>
             Save
          </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Form >
    </Modal>
  );
}


export default Settings