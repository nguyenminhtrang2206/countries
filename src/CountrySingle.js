import React, { Component } from "react";
import axios from "axios";
function getCountry(capital) {
  return axios.get(`'https://restcountries.com/v3.1/capital/${capital}'`);
}

function getWeather(capital) {
  return axios.get(
    `api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPEN_API_KEY}`
  );
}
class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };

  componentDidMount() {
    console.log(this.props.params);
  }
  render() {
    return <div>{this.props.params.name} </div>;
  }
}

export default CountrySingle;
