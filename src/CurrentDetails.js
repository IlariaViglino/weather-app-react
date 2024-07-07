import React from "react";
import "./CurrentTemp.css";

export default function CurrentDetails() {
  return (
    <div className="CurrentDetails">
      <p class="current-details">
        <span class="date"></span>,
        <span class="description">moderate rain </span>
        <br />
        Humidity: <strong class="humidity">87</strong>
        <strong>%</strong>, Wind: <strong class="wind">7.2</strong>
        <strong>km/h</strong>
      </p>
    </div>
  );
}
