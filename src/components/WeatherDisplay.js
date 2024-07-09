import React, { useState } from 'react'
const WeatherDisplay = (props) => {
    let a=null;
    if (props.weather_data.temperature>20) {
        a={color: 'red'};
    }else{
        a={color: 'blue'};
    }
  return (
    <div>
        <p>Temperature: <span style={a}>{props.weather_data.temperature}</span></p>
<p>Conditions: {props.weather_data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay