import React from 'react';
import './WeatherSymbol.css';
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

export const WeatherSymbol = (props) => {

  return (
    <div>
      {props.description === "clear sky" && <img src={props.dayTime? clear_sky_img1 : clear_sky_img2} className="symbol_1" alt="clear sky" />}

      {props.description === "few clouds" && <img src={props.dayTime? few_clouds_img1 : few_clouds_img2} className="symbol_2" alt="few clouds" />}

      {props.description === "scattered clouds" && <img src={scattered_clouds_img} className="symbol_3" alt="scattered clouds" />}

      {props.description === "broken clouds" && <img src={broken_clouds_img} className="symbol_4" alt="broken clouds" />}

      {props.description === "rain" && <img src={props.dayTime? rain_img1 : rain_img2} className="symbol_5" alt="rain" />}

      {props.description === "shower rain" && <img src={shower_rain_img} className="symbol_6" alt="shower rain" />}

      {props.description === "thunderstorm" && <img src={thunderstorm_img} className="symbol_7" alt="thunderstorm" />}

      {props.description === "snow" && <img src={snow_img} className="symbol_8" alt="snow" />}

      {props.description === "mist" && <img src={props.dayTime? mist_img1 : mist_img2} className="symbol_9" alt="mist" />}
    </div>
  );
}
