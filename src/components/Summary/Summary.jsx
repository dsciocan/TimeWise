import { React, useState, useEffect} from 'react';
import axios from 'axios';
import "./Summary.css"

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
        <h1 className="text-center" id="summary-title">Welcome to your personalised corner</h1>
        <p className='text-center' id="summary-events">
          Start adding events to your calendar to receive personalised reminders here.
        </p>
        <div className='row d-flex justify-content-center' id="summary-misc">
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