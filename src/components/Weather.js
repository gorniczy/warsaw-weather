import React from "react"
import "./Weather.css"

export const Weather = props => {
  return (
    <div>
      <p className="tempC" style={{ fontSize: props.fontSize }}>
        {props.temperature}˚C
      </p>
      <div className="break_1" />
    </div>
  )
}
