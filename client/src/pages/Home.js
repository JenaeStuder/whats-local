import React, { Component } from "react";
import "./load.css";
import Carousel from "./components/Carousel";

// import Login from "./components/Login";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default Home;
