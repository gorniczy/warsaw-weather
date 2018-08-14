import React from 'react';
import sun_img from './img/Sun.png';
import './WeatherSymbol.css';

export const WeatherSymbol = (props) => {

  return (
    <div>
      <img src={sun_img} className="symbol" alt="sun" />
    </div>
  );
}
