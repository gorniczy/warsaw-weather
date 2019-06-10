import React from "react"
import { DateTime } from "../components/DateTime"
import { Weather } from "../components/Weather"
import { Navbar } from "../components/Navbar"
import { Skin } from "../components/Skin"
import { Forecast } from "../components/Forecast"
import { WeatherGraphics } from "../components/WeatherGraphics"
import day_img_cov from "../img/Day-background-cover.png"
import night_img_cov from "../img/Night-background-cover.png"
import day_img from "../img/Day-background.png"
import night_img from "../img/Night-background.png"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      appWidth: "",
      showDistricts: "none"
    }

    this.ref = React.createRef()
  }

  componentDidMount() {
    this.loadWeather()
    this.loadForecast()
    this.updateWeather = setInterval(() => this.loadWeather(), 60000)

    this.updateForecast = setInterval(() => this.loadForecast(), 43200000)

    if (localStorage.getItem("skin") === null) {
      this.setState({
        skin: "OCHOTA"
      })
    } else {
      this.setState({
        skin: JSON.parse(localStorage.getItem("skin"))
      })
    }

    window.addEventListener("load", this.setAppWidth)
    window.addEventListener("resize", this.setAppWidth)
  }

  componentDidUpdate() {
    localStorage.setItem("skin", JSON.stringify(this.state.skin))
  }

  componentWillUnmount() {
    clearInterval(this.updateWeather)
    clearInterval(this.updateForecast)
    window.removeEventListener("load", this.setAppWidth)
    window.removeEventListener("resize", this.setAppWidth)
  }

  loadWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=7ed8227c3cabe727f6beaca92aa3365c&units=metric"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          icon: result.weather[0].icon.slice(0, 2),
          temperature: Math.round(result.main.temp),
          sunrise: new Date(result.sys.sunrise * 1000),
          sunset: new Date(result.sys.sunset * 1000)
        })
      })
  }

  loadForecast = () => {
    fetch(
      "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=9f4c6adcbedc4f05b34203925192305&q=Warsaw&format=json&num_of_days=6"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          forecastOne: result.data.weather[1].maxtempC,
          forecastTwo: result.data.weather[2].maxtempC,
          forecastThree: result.data.weather[3].maxtempC,
          forecastFour: result.data.weather[4].maxtempC,
          forecastFive: result.data.weather[5].maxtempC
        })
      })
  }

  handleSkinChange = skin => {
    this.setState({
      skin: skin.toUpperCase()
    })
  }

  handleSetSkin = skin => {
    this.setState({
      skin: skin.toUpperCase()
    })
  }

  dropdown = () => {
    this.setState({
      showDistricts: this.state.showDistricts === "flex" ? "none" : "flex"
    })
  }

  setAppWidth = () => {
    this.setState({
      appWidth: this.ref.current.offsetWidth
    })
  }

  render() {
    const landscape = window.matchMedia("(orientation: landscape)").matches

    const dayTime =
      new Date() > this.state.sunrise && new Date() < this.state.sunset

    const {
      skin,
      appWidth,
      showDistricts,
      icon,
      temperature,
      forecastOne,
      forecastTwo,
      forecastThree,
      forecastFour,
      forecastFive
    } = this.state

    return (
      <div
        className="background"
        style={{
          backgroundImage:
            "url(" + (dayTime ? day_img_cov : night_img_cov) + ")"
        }}
      >
        <div
          className="app"
          style={{
            backgroundImage: "url(" + (dayTime ? day_img : night_img) + ")"
          }}
          ref={this.ref}
        >
          <Skin
            value={skin}
          />
          <Navbar
            value={skin}
            skin={this.handleSkinChange}
            dropdown={this.dropdown}
            showDistricts={showDistricts}
            fontSizeNav={appWidth * (landscape ? 0.1 : 0.3) + "%"}
            fontSizeTitle={appWidth * (landscape ? 0.2 : 0.6) + "%"}
          />
          <WeatherGraphics graphics={icon} dayTime={dayTime} />
          <div className="container">
            <Weather
              temperature={temperature}
              fontSize={appWidth * (landscape ? 1.1 : 1.6) + "%"}
            />
            <DateTime fontSize={appWidth * 0.25 + "%"} />
          </div>
          <Forecast
            forecast={[
              forecastOne,
              forecastTwo,
              forecastThree,
              forecastFour,
              forecastFive
            ]}
            fontSize={appWidth * (landscape ? 0.17 : 0.35) + "%"}
          />
          <div className="box_1"> </div> <div className="box_2"> </div>
        </div>
      </div>
    )
  }
}

export default App
