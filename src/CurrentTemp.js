import React, { useState } from "react";
import "./CurrentTemp.css";


export default function CurrentTemp(props) {
  const [unit,setUnit]=useState('celsius');
  
  function convertFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

if (unit==='celsius'){
  return <span className="CurrentTemp">
    <span className="current-temperature">
        <span className="current-temperature-value">{props.valueCelsius}</span>
        <span className="current-temperature-unit">°C|<a href="/"
        onClick={convertFahrenheit}>°F</a></span>
      </span>
  </span>;}
  else {
    return <span className="CurrentTemp">
    <span className="current-temperature">
        <span className="current-temperature-value">{Math.round((props.valueCelsius*9/5)+32)}</span>
        <span className="current-temperature-unit">°F|<a href="/"
        onClick={convertCelsius}>°C</a></span>
      </span>
  </span>;;
  }
}
