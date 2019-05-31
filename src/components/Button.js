import React from "react"
import btn_img from "../img/button.png"
import "./Button.css"

export const Button = props => {
  return (
    <div className="nav_box" onMouseEnter={props.dropdown} onMouseLeave={props.dropdown}>
      <div className="btn">
        <img src={btn_img} className="btn_img" alt="button" />
      </div>
      <ul className="dropdown" style={{ display: props.showDistricts }}>
        <li
          onClick={() => props.skin("Ochota")}
          style={{ fontSize: props.fontSizeNav }}
        >
          Ochota
        </li>
        <li
          onClick={() => props.skin("Wola")}
          style={{ fontSize: props.fontSizeNav }}
        >
          Wola
        </li>
        <li
          onClick={() => props.skin("Mokotów")}
          style={{ fontSize: props.fontSizeNav }}
        >
          Mokotów
        </li>
      </ul>
      <p className="title" style={{ fontSize: props.fontSizeTitle }}>
        {props.value}
      </p>
    </div>
  )
}
