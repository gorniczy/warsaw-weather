import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DateTime } from './DateTime';
import { Weather } from './Weather';
import { Button } from './Button';
import { Skin } from './Skin';
import { Title } from './Title';
import { Forecast } from './Forecast';
import { WeatherGraphics } from './WeatherGraphics';
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
      forecastFive: ""
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
        this.updateWeather = setInterval(
          () => this.loadWeather(),
          60000
        );

        this.updateWeather = setInterval(
          () => this.loadForecast(),
          60000
        );

        this.setState({
          hideTitle: JSON.parse(localStorage.getItem('hideTitle')),
          skin: JSON.parse(localStorage.getItem('skin'))
              });
        }

componentDidUpdate() {
      localStorage.setItem('hideTitle', JSON.stringify(this.state.hideTitle));
      localStorage.setItem('skin', JSON.stringify(this.state.skin));
        }

  componentWillUnmount() {
    clearInterval(this.updateWeather);
    clearInterval(this.updateForecast);
  }

  loadWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=7ed8227c3cabe727f6beaca92aa3365c&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
                this.setState({
                  icon: result.weather[0].icon.slice(0, 2),
                  temperature: result.main.temp,
                  sunrise: new Date(result.sys.sunrise*1000),
                  sunset: new Date(result.sys.sunset*1000)
                });
            },
          );
  }

  loadForecast() {
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22warsaw%2C%20pl%22)%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
            .then(res => res.json())
            .then(
              (result) => {
                      this.setState({
                        forecastOne:  result.query.results.channel.item.forecast[1].high,
                        forecastTwo: result.query.results.channel.item.forecast[2].high,
                        forecastThree: result.query.results.channel.item.forecast[3].high,
                        forecastFour: result.query.results.channel.item.forecast[4].high,
                        forecastFive: result.query.results.channel.item.forecast[5].high
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
      hideTitle: true,
      skin: skin.toUpperCase()
    });
  }

  render() {

    if (this.state.hideTitle === null) {
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
            <WeatherGraphics graphics={this.state.icon} dayTime={this.dayTime()} />
            <div className="container">
              <Weather temperature={this.state.temperature} />
              <DateTime />
            </div>
            <Forecast forecastOne={this.state.forecastOne} forecastTwo={this.state.forecastTwo} forecastThree={this.state.forecastThree} forecastFour={this.state.forecastFour} forecastFive={this.state.forecastFive} />
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
