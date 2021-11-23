import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import number from "easy-number-formatter";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,flags,capital,languages,population"
      )
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
  }
  render() {
    return (
      <div className="countries">
        {this.state.data.map((item) => (
          <div key={item.name} className="country">
            <h2>{item.name}</h2>
            <p>{item.capital}</p>
            <img src={item.flags.png} alt="flag" />
            <p>Population: {number.formatNumber(item.population)}</p>
            <p>
              Language(s):{" "}
              {item.languages.map((lang) => (
                <span>{lang.name} </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
