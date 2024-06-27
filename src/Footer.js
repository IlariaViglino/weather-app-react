import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a href="https://github.com/IlariaViglino" target="_blank">
        Ilaria Viglino
      </a>{" "}
      and is on{" "}
      <a href="https://github.com/IlariaViglino/my-weather-app" target="_blank">
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="https://weather-for-weather.netlify.app" target="_blank">
        Netlify
      </a>
    </div>
  );
}
