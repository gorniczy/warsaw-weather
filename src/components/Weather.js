import React from "react"
import "./Weather.css"

export const Weather = ({ fontSize, temperature }) => {
  return (
    <div>
      <p className="tempC" style={{ fontSize: fontSize }}>
        {temperature}˚C
      </p>
      <div className="break_1" />
    </div>
  )
}
