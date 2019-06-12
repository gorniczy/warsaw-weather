import React from "react"
import btn_img from "../img/button.png"
import "./Navbar.css"

export const Navbar = ({
  showDistricts,
  dropdown,
  fontSizeTitle,
  value,
  skin,
  fontSizeNav
}) => {
  return (
    <div
      className="navbar"
      onMouseLeave={() => (showDistricts === "flex" ? dropdown() : null)}
    >
      <div className="nav_box">
        <div className="nav-responsive" onClick={() => dropdown()}>
          <div className="btn">
            <img src={btn_img} className="btn_img" alt="button" />
          </div>
        </div>
        <p className="title" style={{ fontSize: fontSizeTitle }}>
          {value}
        </p>
      </div>
      <ul className="dropdown" style={{ display: showDistricts }}>
        <li onClick={() => skin("Ochota")} style={{ fontSize: fontSizeNav }}>
          Ochota
        </li>
        <li onClick={() => skin("Wola")} style={{ fontSize: fontSizeNav }}>
          Wola
        </li>
        <li onClick={() => skin("Mokotów")} style={{ fontSize: fontSizeNav }}>
          Mokotów
        </li>
      </ul>
    </div>
  )
}
