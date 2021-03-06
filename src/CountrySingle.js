import React, { Component } from "react";
import axios from "axios";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPEN_API_KEY}`
  );
}
class CountrySingle extends Component {
  state = {
    country: {},
    weather: {},
    isLoading: true,
  };

  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        isLoading: false,
      });
      console.log("response", res);
      console.log("state country", this.state.country);
      console.log("state weather", this.state.weather);
    });
  }
  render() {
    if (this.state.isLoading) {
      return <div>is loading</div>;
    }
    if (!this.state.isLoading) {
      return (
        <div className="single">
          <div className="single-card">
            <p>
              Right now it is {this.state.weather.main.temp} degrees in{" "}
              {this.state.country.capital}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
              alt={this.state.weather.weather[0].description}
            />
          </div>
        </div>
      );
    }
  }
}

export default CountrySingle;
