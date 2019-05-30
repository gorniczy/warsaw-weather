import React from "react"
import btn_img from "../img/button.png"
import "./Button.css"

export const Button = props => {
  return (
    <div onMouseEnter={props.dropdown} onMouseLeave={props.dropdown}>
      <div className="btn">
        <img src={btn_img} className="btn_img" alt="button" />
      </div>
      <ul className="dropdown" style={{ display: props.showDistricts }}>
        <li
          onClick={() => props.skin("Ochota")}
          style={{ fontSize: props.fontSize }}
        >
          Ochota
        </li>
        <li
          onClick={() => props.skin("Wola")}
          style={{ fontSize: props.fontSize }}
        >
          Wola
        </li>
        <li
          onClick={() => props.skin("Mokotów")}
          style={{ fontSize: props.fontSize }}
        >
          Mokotów
        </li>
      </ul>
    </div>
  )
}
