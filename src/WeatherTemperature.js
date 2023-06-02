import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function converToFarenheit(event){
    event.preventDefault();
    setUnit("farenheit");

  }
  function converToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return((props.celsius * 9) / 5 + 32); 
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C | <a href="/" onClick={converToFarenheit}>°F</a></span>
      </div>
    );
  } else {
    return (
      
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit())}</span>
        <span className="unit">°F | <a href="/" onClick={converToCelsius}>°C</a></span>
      </div>

    );
  }
  
}