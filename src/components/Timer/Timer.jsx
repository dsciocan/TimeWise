import { React, useState, useEffect, createContext, useContext } from "react"
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { FaPlay } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaPause } from "react-icons/fa6";
import Settings from "./Timer-settings";
import SavedSessions from "./SavedSessions";
import "./Timer.css"

export const MinutesContext = createContext();
export const BreakContext = createContext();
export const StartContext = createContext();
export const SecondsContext = createContext();

function Timer() {
    let startingMinutes = 25
    let startingSeconds = 0
    const [startTimer, setStartTimer] = useState(false);
    const [pause, setPause] = useState(true);
    const [minutes, setMinutes] = useState(startingMinutes);
    const [seconds, setSeconds] = useState(startingSeconds);
    const [time, setTime] = useState(`${minutes}:0${seconds}`);
    const [study, setStudy] = useState(true);
    const [modalShow, setModalShow] = useState(false);


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
    } else {
      setPause(true)
    }
  }, [minutes, seconds, startTimer]);





    return (

      <MinutesContext.Provider value={[minutes, setMinutes]}>
      <BreakContext.Provider value={study}>
      <StartContext.Provider value={[startTimer, setStartTimer]}>
      <SecondsContext.Provider value={[seconds, setSeconds]}>
      <Box display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} id="timer-text">
        <h2>Pomodoro Timer</h2>
        <h4>Press <FaPlay /> to start </h4>
        <h4>Or set your desired session length by pressing the <IoMdSettings /> button</h4>
        <Box fontSize={"256px"} id="timer">{time}</Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={"20px"}
        >
          {study ? <h3>Work Time</h3> : <h3>Break Time</h3>}
          {pause ? <IconButton aria-label="play" color="primary" className="icon-button" onClick={togglePlay}><FaPlay /></IconButton> : <IconButton aria-label="pause" className="icon-button"  color="primary" onClick={togglePlay}><FaPause /></IconButton>}
          <IconButton aria-label="settings" color="primary" className="icon-button" onClick={() => setModalShow(true)}><IoMdSettings /></IconButton>
          <Settings show={modalShow} onHide={() => setModalShow(false)} />
        </Box>
      </Box>      
      </Box>
      <Box display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"} className="saved-sessions">
      <SavedSessions/>
      </Box>
      </SecondsContext.Provider>
      </StartContext.Provider>
      </BreakContext.Provider>
      </MinutesContext.Provider>

    )
}

export default Timer