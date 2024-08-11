import React, { useState, useEffect } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
import axios from "axios";


export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.city]);

function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);

}

if(loaded){

  return (
    <div className="weather-forecast" id="forecast">
    <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
            else{return null;}
          })}
        </div>
      </div>
    
  );}

  else{
    let key = "do37btb04e66032f8eb1ab0493255777";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
