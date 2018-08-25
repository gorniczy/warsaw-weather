import React from 'react';
import './WeatherGraphics.css';
import clear_sky_img1 from './img/Clear Sky Sun.png';
import clear_sky_img2 from './img/Clear Sky Moon.png';
import few_clouds_img1 from './img/Few Clouds Sun.png';
import few_clouds_img2 from './img/Few Clouds Moon.png';
import scattered_clouds_img from './img/Scattered Clouds.png';
import broken_clouds_img from './img/Broken Clouds.png';
import rain_img1 from './img/Rain Sun.png';
import rain_img2 from './img/Rain Moon.png';
import shower_rain_img from './img/Shower Rain.png';
import thunderstorm_img from './img/Thunderstorm.png';
import snow_img from './img/Snow.png';
import mist_img1 from './img/Mist Sun.png';
import mist_img2 from './img/Mist Moon.png';

export const WeatherGraphics = (props) => {

  return (
    <div>
      {props.graphics === "01" && <img src={props.dayTime? clear_sky_img1 : clear_sky_img2} className="graphics_1" alt="clear sky" />}

      {props.graphics === "02" && <img src={props.dayTime? few_clouds_img1 : few_clouds_img2} className="graphics_2" alt="few clouds" />}

      {props.graphics === "03" && <img src={scattered_clouds_img} className="graphics_3" alt="scattered clouds" />}

      {props.graphics === "04" && <img src={broken_clouds_img} className="graphics_4" alt="broken clouds" />}

      {props.graphics === "10" && <img src={props.dayTime? rain_img1 : rain_img2} className="graphics_5" alt="rain" />}

      {props.graphics === "09" && <img src={shower_rain_img} className="graphics_6" alt="shower rain" />}

      {props.graphics === "11" && <img src={thunderstorm_img} className="graphics_7" alt="thunderstorm" />}

      {props.graphics === "13" && <img src={snow_img} className="graphics_8" alt="snow" />}

      {props.graphics === "50" && <img src={props.dayTime? mist_img1 : mist_img2} className="graphics_9" alt="mist" />}
    </div>
  );
}
