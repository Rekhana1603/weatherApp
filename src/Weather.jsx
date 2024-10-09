import React from 'react'
import axios from 'axios'
import { useState } from 'react';


const Weather = () => {
    const [weather, setWeather] = useState('')
    const [city, setCity] = useState('')

    const getWeather = async () => {
        try {
            const response = await axios.get(                          
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdbc6a4e8b198d8d884b2689a8fc0d34&units=metric`
            )
            setWeather(response.data);
        } catch (err) {
            console.log(err);
            alert('Invalid city name!!!  Please enter a valid name.')
        }
    }

  return (
    <div className='container my-5'>
      <div style={{backgroundColor:"#0047AB", width:"520px"}} className="mx-auto rounded border shadow text-center text-light p-4">
      <h1 className='fw-bold mb-5'>Weather Forecast</h1>

      <div className="input-container d-flex">
                <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    value={city}
                    name="text"
                    placeholder="Enter city name"
                    className="form-control"
                />
                <button onClick={getWeather} className="btn btn-warning text-light ms-2"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

      
      { weather && 
        <div className='weather-details'>
        <img height={'150px'} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="..." />
        <h1 className='fw-medium display-4'>{weather.main?.temp}°C</h1>
        <div className='mb-5 fs-2'><i class="fa-solid fa-location-dot"></i> {weather.name}</div>
  
        <div className="row">
          <div className="col">
          <i className="fa-solid fa-water fs-4"></i>
          <span className='ms-2 fs-4'>Humidity</span>
          <p className='fs-5'>{weather.main?.humidity}%</p>         
        </div>
        
        <div className="col">
          <i class="fa-solid fa-wind fs-4"></i>
          <span className='ms-2 fs-4'>Wind speed</span>
          <p className='fs-5 ms-3'>{weather.wind?.speed} km/h</p>
        </div>
        </div>
      </div>
      }
    
      
      </div>
    </div>
  )
}

export default Weather