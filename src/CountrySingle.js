import React, { Component } from "react";

class CountrySingle extends Component {
  render() {
    return <div>{this.props.params.name} </div>;
  }
}

export default CountrySingle;
