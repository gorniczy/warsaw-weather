import React from 'react';
import {
  DateTime
} from '../components/DateTime';
import {
  Weather
} from '../components/Weather';
import {
  Button
} from '../components/Button';
import {
  Skin
} from '../components/Skin';
/* import { Title } from './Title'; */
import {
  Forecast
} from '../components/Forecast';
import {
  WeatherGraphics
} from '../components/WeatherGraphics';
/* import title_img from './img/Title-background.png'; */
import day_img_cov from '../img/Day-background-cover.png';
import night_img_cov from '../img/Night-background-cover.png';
import day_img from '../img/Day-background.png';
import night_img from '../img/Night-background.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideTitle: null,
      icon: "",
      temperature: "",
      skin: "",
      sunrise: null,
      sunset: null,
      forecastOne: "",
      forecastTwo: "",
      forecastThree: "",
      forecastFour: "",
      forecastFive: "",
      appWidth: ""
    }

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.loadWeather();
    this.loadForecast();
    this.updateWeather = setInterval(
      () => this.loadWeather(),
      60000
    );

    this.updateForecast = setInterval(
      () => this.loadForecast(),
      43200000
    );
    // set default skin to "Ochota"; remove "if" after enabling title-screen choice
    if (localStorage.getItem('skin') === null) {
      this.setState({
        skin: "OCHOTA"
      });
    } else {
      this.setState({
        hideTitle: JSON.parse(localStorage.getItem('hideTitle')),
        skin: JSON.parse(localStorage.getItem('skin'))
      });
    }

    window.addEventListener("load", this.setAppWidth);
    window.addEventListener("resize", this.setAppWidth);
  }

  componentDidUpdate() {
    localStorage.setItem('hideTitle', JSON.stringify(this.state.hideTitle));
    localStorage.setItem('skin', JSON.stringify(this.state.skin));
  }

  componentWillUnmount() {
    clearInterval(this.updateWeather);
    clearInterval(this.updateForecast);
    window.removeEventListener("load", this.setAppWidth);
    window.removeEventListener("resize", this.setAppWidth);
  }

  loadWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=7ed8227c3cabe727f6beaca92aa3365c&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            icon: result.weather[0].icon.slice(0, 2),
            temperature: Math.round(result.main.temp),
            sunrise: new Date(result.sys.sunrise * 1000),
            sunset: new Date(result.sys.sunset * 1000)
          });
        },
      );
  }

  loadForecast = () => {
    fetch("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=c9a96e6278db48a8baa115236191103&q=Warsaw&format=json&num_of_days=6")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            forecastOne: result.data.weather[1].maxtempC,
            forecastTwo: result.data.weather[2].maxtempC,
            forecastThree: result.data.weather[3].maxtempC,
            forecastFour: result.data.weather[4].maxtempC,
            forecastFive: result.data.weather[5].maxtempC
          });
        },
      );
  }

  dayTime = () => {
    return new Date() > this.state.sunrise && new Date() < this.state.sunset;
  }

  handleSkinChange = (skin) => {
    this.setState({
      skin: skin.toUpperCase()
    });
  }

  handleSetSkin = (skin) => {
    this.setState({
      hideTitle: true,
      skin: skin.toUpperCase()
    });
  }

  setAppWidth = () => {
    this.setState({
      appWidth: this.ref.current.offsetWidth
    })
  }

  render() {
    let landscape = window.matchMedia("(orientation: landscape)").matches;

    // title screen placeholder below
    /*
        if (this.state.hideTitle === null) {
          return (
            <div>
              <Title title={this.handleSetSkin} />
            </div>
          );
        }

        else
    */
    return ( <
      div className = "background"
      style = {
        {
          backgroundImage: "url(" + (this.dayTime() ? day_img_cov : night_img_cov) + ")"
        }
      } >
      <
      div className = "app"
      style = {
        {
          backgroundImage: "url(" + (this.dayTime() ? day_img : night_img) + ")"
        }
      }
      ref = {
        this.ref
      } >
      <
      Skin value = {
        this.state.skin
      }
      fontSize = {
        this.state.appWidth * (landscape ? 0.2 : 0.6) + "%"
      }
      /> <
      Button skin = {
        this.handleSkinChange
      }
      fontSize = {
        this.state.appWidth * (landscape ? 0.1 : 0.3) + "%"
      }
      /> <
      WeatherGraphics graphics = {
        this.state.icon
      }
      dayTime = {
        this.dayTime()
      }
      /> <
      div className = "container" >
      <
      Weather temperature = {
        this.state.temperature
      }
      fontSize = {
        this.state.appWidth * (landscape ? 1.1 : 1.6) + "%"
      }
      /> <
      DateTime fontSize = {
        this.state.appWidth * 0.25 + "%"
      }
      /> < /
      div > <
      Forecast forecastOne = {
        this.state.forecastOne
      }
      forecastTwo = {
        this.state.forecastTwo
      }
      forecastThree = {
        this.state.forecastThree
      }
      forecastFour = {
        this.state.forecastFour
      }
      forecastFive = {
        this.state.forecastFive
      }
      fontSize = {
        this.state.appWidth * (landscape ? 0.17 : 0.35) + "%"
      }
      /> {
      this.state.skin === "OCHOTA" && < div className = "nav_box_1" > < /div>} {
      this.state.skin === "WOLA" && < div className = "nav_box_2" > < /div>} {
      this.state.skin === "MOKOTÓW" && < div className = "nav_box_3" > < /div>} <
      div className = "box_1" > < /div> <
      div className = "box_2" > < /div> < /
      div > <
      /div>
    );
    // }
  }

}

export default App;
