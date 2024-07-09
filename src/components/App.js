
import React, { useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
    let weather_data={ temperature: 25, conditions: "Sunny" };

  return (
    <div>
      <WeatherDisplay weather_data={weather_data} />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
