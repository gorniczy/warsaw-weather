import React from 'react';
import './WeatherSymbol.css';
import clear_sky_img from './img/Clear Sky.png';
import few_clouds_img from './img/Few Clouds.png';
import scattered_clouds_img from './img/Scattered Clouds.png';
import broken_clouds_img from './img/Broken Clouds.png';
import rain_img from './img/Rain.png';
import shower_rain_img from './img/Shower Rain.png';
import thunderstorm_img from './img/Thunderstorm.png';
import snow_img from './img/Snow.png';
import mist_img from './img/Mist.png';

export const WeatherSymbol = (props) => {

  return (
    <div>
      {props.description === "clear sky" && <img src={clear_sky_img} className="symbol" alt="clear sky" />}

      {props.description === "few clouds" && <img src={few_clouds_img} className="symbol" alt="few clouds" />}

      {props.description === "scattered clouds" && <img src={scattered_clouds_img} className="symbol" alt="scattered clouds" />}

      {props.description === "broken clouds" && <img src={broken_clouds_img} className="symbol" alt="broken clouds" />}

      {props.description === "rain" && <img src={rain_img} className="symbol" alt="rain" />}

      {props.description === "shower rain" && <img src={shower_rain_img} className="symbol" alt="shower rain" />}

      {props.description === "thunderstorm" && <img src={thunderstorm_img} className="symbol" alt="thunderstorm" />}

      {props.description === "snow" && <img src={snow_img} className="symbol" alt="snow" />}

      {props.description === "mist" && <img src={mist_img} className="symbol" alt="mist" />}
    </div>
  );
}
