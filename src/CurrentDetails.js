import React from "react";

export default function CurrentDetails() {
  return (
    <div className="CurrentDetails">
      <p className="current-details">
        <span className="date"></span>,
        <span className="description">moderate rain </span>
        <br />
        Humidity: <strong className="humidity">87</strong>
        <strong>%</strong>, Wind: <strong className="wind">7.2</strong>
        <strong>km/h</strong>
      </p>
    </div>
  );
}
