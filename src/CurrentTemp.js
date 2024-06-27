import React from "react";

export default function CurrentTemp() {
  return <div className="CurrentTemp">
    <div class="current-temperature">
        <span class="current-temperature-icon">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            width="80"
          />
        </span>
        <span class="current-temperature-value"></span>
        <span class="current-temperature-unit">°C</span>
      </div>
  </div>;
}
