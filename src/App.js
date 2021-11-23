import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import number from "easy-number-formatter";

class App extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,flags,capital,languages,population,currencies"
      )
      .then((res) => {
        this.setState({ isLoading: false, data: res.data });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading">
          <p>Wait, I am loading...</p>
          <div className="loader"></div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        <div className="max-width">
          <input
            className="search-bar"
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.searchHandler.bind(this)}
          />

          <div className="countries">
            {this.state.data
              .filter((item) => {
                return item.name
                  .toLowerCase()
                  .includes(this.state.searchInput.toLowerCase());
              })
              .map((item) => (
                <div key={item.name} className="country">
                  <h2>{item.name}</h2>
                  <p>{item.capital}</p>
                  <img src={item.flags.png} alt="flag" />
                  <p className="population">
                    Population: {number.formatNumber(item.population)}
                  </p>
                  <p>
                    Language(s):
                    {item.languages.map((lang, i) => (
                      <span key={i}>{lang.name} </span>
                    ))}
                  </p>
                  <p>
                    Currencies:{" "}
                    {item.currencies.map((curr, i) => (
                      <span key={i}>
                        {curr.name} - {curr.symbol}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}

export default App;
