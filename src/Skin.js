import React from 'react';
import './Skin.css';
import ochota_img from './img/Ochota.jpeg';
import wola_img from './img/Wola.jpg';

export const Skin = (props) => {

    return (<div>
              <p className="title">{props.value.toUpperCase()}</p>
              {props.value === "Ochota" && <img className="facade" src={ochota_img} alt="picture of a house facade" />}
              {props.value === "Wola" && <img className="facade" src={wola_img} alt="picture of a house facade" />}
            </div>
            );

}
