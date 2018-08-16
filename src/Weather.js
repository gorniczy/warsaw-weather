import React from 'react';
import './Weather.css';

export const Weather = (props) => {
  return (
    <div>
      <p className="tempC">{props.temperature}˚C</p>
      <div className="break" />
    </div>
  );
}
