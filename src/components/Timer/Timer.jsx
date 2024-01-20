import { React, useState, useEffect } from "react"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FaPlay } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaPause } from "react-icons/fa6";



function Timer() {
    let startingMinutes = 0
    let startingSeconds = 10
    const [startTimer, setStartTimer] = useState(false);
    const [pause, setPause] = useState(true);
    const [minutes, setMinutes] = useState(startingMinutes);
    const [seconds, setSeconds] = useState(startingSeconds);
    const [time, setTime] = useState(`${startingMinutes}:0${startingSeconds}`);
    const [study, setStudy] = useState(true);
    let defaultBreakMinutes = 0;
    let defaultBreakSeconds = 5;
    function togglePlay() {
        setPause(!pause)
        if(pause == true) {
            setStartTimer(true);
        } else {
            setStartTimer(false);
        }
    }



    useEffect(() => {
    if(seconds < 10 && minutes < 10) {
        setTime(`0${minutes}:0${seconds}`)
    } else if( seconds < 10 ) {
        setTime(`${minutes}:0${seconds}`)
    } else if( minutes < 10 ) {
        setTime(`0${minutes}:${seconds}`)
    } else {
        setTime(`${minutes}:${seconds}`)
    }
    if (startTimer) {
      const interval = setTimeout(() => {
      if(minutes > 0 && seconds === 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes == 0 && seconds == 0) {
        setStudy(!study)
      }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [minutes, seconds, startTimer]);


  useEffect(()=> {
    if(study) {
      setMinutes(startingMinutes)
      setSeconds(startingSeconds)
    } else {
      setMinutes(defaultBreakMinutes);
      setSeconds(defaultBreakSeconds)
    }
  }, [study])




//   const displayTime = () => {

//   }
//   const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
//   const [state, setState] = useState(STATE_FLOW[currentFlowIndex]); 

//     const handleSetState = () => {
//     setCurrentFlowIndex(currentFlowIndex + 1);
//     currentFlowIndex === STATE_FLOW.length - 1 && setCurrentFlowIndex(0);

//     setState(STATE_FLOW[currentFlowIndex]);
//   };
    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <h2>Pomodoro Timer</h2>
        <h4>Press <FaPlay /> to start </h4>
        <h4>Or set your desired session length by pressing the <IoMdSettings /> button</h4>
        <Box fontSize={"256px"}>{time}</Box>
        {study ? <h5>Work Time</h5> : <h5>Break Time</h5>}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={"20px"}
        >
          {/* <Settings>Settings</Settings> */}
          {pause ? <Button variant="contained" onClick={togglePlay}><FaPlay /></Button> : <Button variant="contained" onClick={togglePlay}><FaPause /></Button>}
          <Button variant="contained"><IoMdSettings /></Button>
        </Box>
      </Box>
    )
}

export default Timer