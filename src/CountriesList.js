import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CountriesCard from "./CountriesCard";
import { Outlet } from "react-router-dom";

class CountriesList extends Component {
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
          <Outlet />
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
              .map((country) => (
                <CountriesCard {...country} key={country.name} />
              ))}
          </div>
        </div>
      );
    }
  }
}

export default CountriesList;
