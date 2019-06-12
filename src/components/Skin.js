import React from "react"
import "./Skin.css"
import ochota_img from "../img/Ochota.jpeg"
import wola_img from "../img/Wola.JPG"
import mokotow_img from "../img/Mokotów.JPG"

export const Skin = ({ value }) => {
  return (
    <div>
      {value === "OCHOTA" && (
        <img className="facade" src={ochota_img} alt="house facade" />
      )}
      {value === "WOLA" && (
        <img className="facade" src={wola_img} alt="house facade" />
      )}
      {value === "MOKOTÓW" && (
        <img className="facade" src={mokotow_img} alt="house facade" />
      )}
    </div>
  )
}
