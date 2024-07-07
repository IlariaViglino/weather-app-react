import React, { useState } from "react";
import "./Header.css";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";




export default function Header(props) {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({});
  const [city2, setCity2] = useState(props.cityName);
  let [loaded, setLoaded] = useState(false);

  let apiKey = "cb77c04d96ad2oba3t437155800bf4f6";

  function updateCity(event) {
    setCity(event.target.value);
  }
  function updateWeather(response) {
    setLoaded(true);

    setWeather({
      date: new Date(),
      temp: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setCity2(city);

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(updateWeather);
  }

  function capitalizeFirstLetter(string) {
    //string = string.replaceAll(" ", "");
    let firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let remainder = string.slice(1).toLowerCase();
    return firstLetter + remainder;
  }
  


  if (loaded) {
    return (
      <div className="Header">
        <form onSubmit={handleSubmit} class="enter-city-form">
          <input
            onChange={updateCity}
            type="search"
            placeholder="Enter a city..."
            required
            id="search-input"
          />
          <input type="submit" value="Search" id="submit-button" />
        </form>
        <div className="Main">
          <div>
            <h1 class="current-city">{capitalizeFirstLetter(city2)}</h1>
            <div className="CurrentDetails">
              <p class="current-details">
                <span class="date">
                  <FormatDate date={weather.date}/>
                  </span>,
                <span class="description"> {weather.description}</span>
                <br />
                Humidity: <strong class="humidity">{weather.humidity}</strong>
                <strong>%</strong>, Wind:{" "}
                <strong class="wind">{weather.wind}</strong>
                <strong>km/h</strong>
              </p>
            </div>
          </div>
          <div className="CurrentTemp">
            <div class="current-temperature">
              <span class="current-temperature-icon">
<WeatherIcon code={weather.icon} />
              </span>
              <CurrentTemp valueCelsius={weather.temp}/>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "cb77c04d96ad2oba3t437155800bf4f6";
    let apiUrlDefaultCity = `https://api.shecodes.io/weather/v1/current?query=Lausanne&key=${apiKey}`;
    axios.get(apiUrlDefaultCity).then(updateWeather);
    return (
      <div className="Header">
        <form onSubmit={handleSubmit} class="enter-city-form">
          <input
            onChange={updateCity}
            type="search"
            placeholder="Enter a city..."
            required
            id="search-input"
          />
          <input type="submit" value="Search" id="submit-button" />
        </form>
        <div className="Main">
          <div>
            <h1 class="current-city">{props.cityName}</h1>
            <div className="CurrentDetails">
              <p class="current-details">
                <span class="date"></span>,
                <span class="description">{weather.description}</span>
                <br />
                Humidity: <strong class="humidity">{weather.humidity}</strong>
                <strong>%</strong>, Wind: <strong class="wind">{weather.wind}</strong>
                <strong>km/h</strong>
              </p>
            </div>
          </div>
          <div className="CurrentTemp">
            <div class="current-temperature">
              <span class="current-temperature-icon">
              <WeatherIcon code={weather.icon} />
              </span>
              <CurrentTemp valueCelsius={weather.temp}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
