import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
    function formatDay(timestamp) {
        let date = new Date(timestamp * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        return day;
      }
      
  return  <div>
  <div className="weather-forecast-day">
  <div className="weather-forecast-date">{formatDay(props.data.time)}</div>
  <div className="weather-forecast-icon">
  <WeatherIcon code={props.data.condition.icon} size={60} />
  </div>
  <div className="weather-forecast-temperatures">
    <div className="weather-forecast-temperature">
      <strong>{Math.round(props.data.temperature.maximum)}º</strong>
    </div>
  <div className="weather-forecast-temperature">{Math.round(props.data.temperature.minimum)}º</div>
  </div>
</div>
</div>;
}