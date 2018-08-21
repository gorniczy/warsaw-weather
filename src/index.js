import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DateTime } from './DateTime';
import { Weather } from './Weather';
import { Button } from './Button';
import { Skin } from './Skin';
import { Title } from './Title';
import { WeatherSymbol } from './WeatherSymbol';
import title_img from './img/Title-background.png';
import day_img_cov from './img/Day-background-cover.png';
import night_img_cov from './img/Night-background-cover.png';
import day_img from './img/Day-background.png';
import night_img from './img/Night-background.png';
import registerServiceWorker from './registerServiceWorker';

class ShowWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: true,
      main: "",
      temperature: "",
      wind: "",
      skin: "",
      sunrise: null,
      sunset: null,
      forecastOne: [],
      forecastTwo: [],
      forecastThree: [],
      forecastFour: [],
      forecastFive: []
    }
    this.loadWeather = this.loadWeather.bind(this);
    this.loadForecast = this.loadForecast.bind(this);
    this.dayTime = this.dayTime.bind(this);
    this.handleSkinChange = this.handleSkinChange.bind(this);
    this.handleSetSkin = this.handleSetSkin.bind(this);
  }

  componentDidMount() {
        this.loadWeather();
        this.loadForecast();
        this.update = setInterval(
          () => this.loadWeather(),
          60000
        );

        this.setState({
          title: JSON.parse(localStorage.getItem('title')),
          skin: JSON.parse(localStorage.getItem('skin'))
        });

        }

componentWillUpdate(nextProps, nextState) {
          localStorage.setItem('title', JSON.stringify(nextState.title));
          localStorage.setItem('skin', JSON.stringify(nextState.skin));

        }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  loadWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=7ed8227c3cabe727f6beaca92aa3365c&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
                this.setState({
                  main: result.weather[0].main,
                  temperature: result.main.temp,
                  wind: result.wind.speed,
                  sunrise: new Date(result.sys.sunrise*1000),
                  sunset: new Date(result.sys.sunset*1000)
                });
            },
          );
  }

  loadForecast() {
    fetch("https://api.darksky.net/forecast/3949e0206294c0a10a16100fff5a0467/52.229676,21.012229?units=si")
            .then(res => res.json())
            .then(
              (result) => {
                      this.setState({
                        forecastOne: [result.daily.data[0].time, result.daily.data[0].temperatureHigh],
                        forecastTwo: [result.daily.data[1].time, result.daily.data[1].temperatureHigh],
                        forecastThree: [result.daily.data[2].time, result.daily.data[2].temperatureHigh],
                        forecastFour: [result.daily.data[3].time, result.daily.data[3].temperatureHigh],
                        forecastFive: [result.daily.data[4].time, result.daily.data[4].temperatureHigh]
                      });
                  },
                );
  }

  dayTime() {
    return new Date() > this.state.sunrise && new Date() < this.state.sunset;
  }

  handleSkinChange(skin) {
    this.setState({
      skin: skin.toUpperCase()
    });
  }

  handleSetSkin(skin) {
    this.setState({
      title: false,
      skin: skin.toUpperCase()
    });
  }

  render() {
    if (this.state.title) {
      return (
        <div className="background" style={{backgroundImage: "url(" + title_img + ")"}}>
          <Title title={this.handleSetSkin} />
        </div>
      );
    }

    else {
      return (
        <div className="background" style={{backgroundImage: "url(" + (this.dayTime()? day_img_cov : night_img_cov) + ")"}}>
          <div className="app" style={{backgroundImage: "url(" + (this.dayTime()? day_img : night_img) + ")"}}>
            <Skin value={this.state.skin} />
            <Button skin={this.handleSkinChange} />
            <WeatherSymbol className="smb" />
            <div className="container">
              <p>{this.state.day}</p>
              <Weather main={this.state.main} temperature={this.state.temperature} wind={this.state.wind} />
              <DateTime />
            </div>
            {this.state.skin === "OCHOTA" && <div className="nav_box_1"></div>}
            {this.state.skin === "WOLA" && <div className="nav_box_2"></div>}
            {this.state.skin === "MOKOTÓW" && <div className="nav_box_3"></div>}
            <div className="box_1"></div>
            <div className="box_2"></div>
          </div>
        </div>
    );
  }
}

}

ReactDOM.render(<ShowWeather />, document.getElementById('root'));
registerServiceWorker();
