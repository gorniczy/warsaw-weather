import React from 'react';
import './Skin.css';
import ochota_img from './img/Ochota.jpeg';
import wola_img from './img/Wola.JPG';
import mokotow_img from './img/Mokotów.JPG';

export const Skin = (props) => {

    return (<div>
              <p className="title" style={{fontSize: props.fontSize}}>{props.value}</p>
              {props.value === "OCHOTA" && <img className="facade" src={ochota_img} alt="house facade" />}
              {props.value === "WOLA" && <img className="facade" src={wola_img} alt="house facade" />}
              {props.value === "MOKOTÓW" && <img className="facade" src={mokotow_img} alt="house facade" />}
            </div>
            );

}
