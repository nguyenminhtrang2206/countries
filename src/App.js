import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({ data: res.data });
      // console.log(this.state.data);
    });
  }
  render() {
    return (
      <div className="countries">
        {this.state.data.map((item) => (
          <div key={item.name.common} className="country">
            <h2>{item.name.common}</h2>
            <p>{item.capital}</p>
            <img src={item.flags.png} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
