import { React, useState, useEffect} from 'react';
import axios from 'axios';

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
        console.log(response);
        const dataPath = response.data
        const celsus = Math.round(dataPath.main.temp - 273)
        setWeather({icon: `https://openweathermap.org/img/wn/${dataPath.weather[0].icon}@2x.png`, temperature: celsus})
      })
      .catch(function (error) {
        console.log(error);
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
        console.log(response);
        setFact(response.data.text)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
    uselessFact()
    return (
      <div>
        <h1 className="text-center">Welcome!</h1>
        <p className='text-center'>
          Start adding events to your calendar to receive personalised reminders here.
        </p>
        <div className='row d-flex justify-content-center'>
        <div className="col-lg-6">
          <h5>Today's Useless Fact</h5>
          <p>{fact}</p>
        </div>
        {successGet ? <div className='col-lg-4'>
            <h4>Your Weather</h4>
            <img src={weather.icon}/>
            <p>{weather.temperature}°C</p>
          </div> :  <div className="col-lg-4"><p>Permission required to show weather</p></div>}
          </div>
      </div>
    );
  }
  
  export default Summary;