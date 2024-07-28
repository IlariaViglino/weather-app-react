import React from "react";
import CurrentDetails from "./CurrentDetails";
import CurrentTemp from "./CurrentTemp";
import Header from "./Header";
export default function Main() {
  return (
    <div className="Main">
      <div>
        <h1 className="current-city"></h1>
        <CurrentDetails />
      </div>
      <CurrentTemp />
    </div>
  );
}
