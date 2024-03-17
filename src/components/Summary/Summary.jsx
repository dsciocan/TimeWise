import { React, useState, useEffect} from 'react';
import axios from 'axios';
import "./Summary.css"
import { isToday } from 'date-fns';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function Summary() {
  const [weather, setWeather] = useState({icon: "" , temperature: ""})
  const [fact, setFact] = useState()
  const [successGet, setSuccessGet] = useState(false)

useEffect(() =>{
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
      setSuccessGet(true)
      const { latitude, longitude } = position.coords;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0197cf67ab7a13595738a77d2d43edd2`)
      .then(function (response) {
        const dataPath = response.data
        const celsus = Math.round(dataPath.main.temp - 273)
        setWeather({icon: `https://openweathermap.org/img/wn/${dataPath.weather[0].icon}@2x.png`, temperature: celsus})
      })
      .catch(function (error) {
      })    
      .finally(function () {
        return
      });
    }




    function error () {
      setSuccessGet(false)
      return <p>Permission required to show weather</p>
    }
  }, [])

  const eventList = JSON.parse(localStorage.getItem('events')) || [];
  let events;
  let today = new Date()
  console.log(today)
      const todayEvents = eventList.filter((event) => today.toISOString()>=event.start && today.toISOString()<= event.end)
      if(todayEvents.length > 0) {
      events = todayEvents.map((event) => <ListGroupItem>
        <div className='row event-li'>
        <h5 className='col-lg-5'>
            {event.title}
        </h5>
          <div className="col-lg-3 text-center event-date">Starts: {event.start.slice(0,16).replace("T", ", ")}</div>
          <div className="col-lg-3 text-center event-date">Ends: {event.end.slice(0,16).replace("T", ", ")}</div>
        </div>
      </ListGroupItem>)
      } else if (todayEvents.length == 0) {
        events =  <p className='text-center'>No events to show today</p>
     }


    function uselessFact() {
      axios.get('https://uselessfacts.jsph.pl/api/v2/facts/today')
      .then(function (response) {
        setFact(response.data.text)
      })
      .catch(function (error) {
      })

    }
    uselessFact()
    return (
      <div className='container-fluid summary'>
        <div className='summary-component'>
        <h1 className="text-center" id="summary-title">Welcome to your personalised corner</h1>
        {eventList.length == 0 ? 

        <p className='text-center' id="summary-events">Start adding events to your calendar to receive personalised reminders here.</p> 
        :
        <ListGroup>
          <h4 className='text-center'>Today's Events</h4>
          {events}
        </ListGroup>

        }
        </div>
        <div className='row d-flex justify-content-center summary-component'>
        <div className="col-lg-6 col-sm-12">
          <h4>Today's Useless Fact</h4>
          <p>{fact}</p>
        </div>
        {successGet ? <div className='col-lg-4 col-sm-8'>
            <h4>Your Weather</h4>
            <div className='d-flex align-items-center'>
            <img src={weather.icon}/>
            <p>{weather.temperature}°C</p>
            </div>
          </div>  :  <div className="col-lg-4 col-sm-12"><p>Permission required to show weather</p></div>}
          </div>
      </div>
    );
  }
  
  export default Summary;