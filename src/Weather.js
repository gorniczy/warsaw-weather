import React from 'react';

export const Weather = (props) => {
  return (
    <div>
      <p style={{fontFamily: "Arial", fontSize: 40, color: "#4182BD"}}>Main: {props.main}</p>
      <p style={{fontFamily: "Arial", fontSize: 60, color: "#BD4141"}}>{props.temperature}˚C</p>
      <p style={{fontFamily: "Arial", fontSize: 40, color: "#43A12C"}}>{props.wind} m/s</p>
    </div>
  );
}
