import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";


export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(props.city);

function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
console.log(forecast[1].maximum);
}



if(loaded){
  return <div className="Forecast">
    <div className="weather-forecast" id="forecast">
    <div className="weather-forecast-day">
          <div className="weather-forecast-date">Sun</div>
          <div className="weather-forecast-icon">
          <WeatherIcon code="few-clouds-night" size={60} />
          </div>
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>{forecast[1].maximum}</strong>
            </div>
          <div className="weather-forecast-temperature">30º</div>
          </div>
        </div>

    </div>
  </div>;}
  else{

  let key = "do37btb04e66032f8eb1ab0493255777";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
