import React from 'react';

export const Weather = (props) => {
  return (
    <div>
      <p style={{fontFamily: "Arial", fontSize: 40, color: "#4182BD"}}>Main: {props.main}</p>
      <p style={{fontFamily: "AvenirNextCondensed-UltraLight", fontSize: 250, color: "#BD4141", margin: "0"}}>{props.temperature}˚C</p>
      <p style={{fontFamily: "Arial", fontSize: 40, color: "#43A12C"}}>{props.wind} m/s</p>
    </div>
  );
}
